import { useEffect, useState, useRef } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
import { getOnlineUsers } from "../../api-calls/presenceApi";

/**
 * Real-time user presence hook.
 * Maintains a map of { email → { online, lastSeen } } using WebSocket STOMP events.
 */
export default function usePresence(currentUserEmail) {
  const [onlineMap, setOnlineMap] = useState({});
  const stompClientRef = useRef(null);

  useEffect(() => {
    const baseUrl =
      import.meta?.env?.VITE_API_BASE_URL || "http://localhost:8080";

    console.log("🌐 Connecting to WebSocket at:", `${baseUrl}/ws`);

    const socket = new SockJS(`${baseUrl}/ws`);

    const stompClient = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      debug: (str) => console.log("📡 STOMP Debug:", str),

      connectHeaders: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },

      onConnect: async () => {
        console.log("✅ Connected to WebSocket presence service");

        // Subscribe to real-time presence updates
        stompClient.subscribe("/topic/presence", (message) => {
          try {
            const body = message?.body?.trim();
            if (!body) return;

            const presenceUpdate = JSON.parse(body);
            console.log("📨 Presence update:", presenceUpdate);

            if (presenceUpdate?.email) {
              setOnlineMap((prev) => {
                const newMap = {
                  ...prev,
                  [presenceUpdate.email]: presenceUpdate,
                };
                console.log("🧠 Updated onlineMap:", newMap);
                return newMap;
              });
            }
          } catch (err) {
            console.error("⚠️ Failed to parse presence message:", err);
          }
        });

        // Fetch the initial online users
        try {
          const onlineEmails = await getOnlineUsers();
          console.log("🌐 Initial online users:", onlineEmails);

          setOnlineMap((prev) => {
            const updated = { ...prev };
            onlineEmails.forEach((email) => {
              if (!updated[email]) {
                updated[email] = {
                  email,
                  online: true,
                  lastSeen: null,
                };
              }
            });
            return updated;
          });
        } catch (err) {
          console.error("❌ Failed to fetch initial online users:", err);
        }
      },

      onStompError: (frame) => {
        console.error("❌ STOMP protocol error:", frame);
      },
    });

    stompClient.activate();
    stompClientRef.current = stompClient;

    return () => {
      if (stompClientRef.current) {
        stompClientRef.current.deactivate();
        console.log("👋 Disconnected from WebSocket presence service");
      }
    };
  }, [currentUserEmail]);

  return onlineMap;
}
