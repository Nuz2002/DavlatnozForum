import { useEffect, useRef } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

export default function useMultiMessageSocket(conversationMap, onMessage) {
  const stompClientRef = useRef(null);

  useEffect(() => {
    const baseUrl =
      import.meta?.env?.VITE_API_BASE_URL || "http://localhost:8080";

    const socket = new SockJS(`${baseUrl}/ws`);
    const stompClient = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      connectHeaders: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      debug: (str) => console.log("📡 STOMP Debug:", str),
      onConnect: () => {
        console.log("✅ Connected to multi-conversation socket");

        // Subscribe to each conversation
        Object.values(conversationMap).forEach((conversationId) => {
          if (!conversationId) return;

          const topic = `/topic/messages/${conversationId}`;
          console.log("🔔 Subscribing to", topic);

          stompClient.subscribe(topic, (message) => {
            try {
              const parsed = JSON.parse(message.body);
              console.log("📨 Message received:", parsed);
              onMessage(parsed);
            } catch (err) {
              console.error("❌ Failed to parse message:", err);
            }
          });
        });
      },
      onStompError: (frame) => {
        console.error("❌ STOMP error:", frame);
      },
    });

    stompClient.activate();
    stompClientRef.current = stompClient;

    return () => {
      stompClientRef.current?.deactivate();
      console.log("👋 Disconnected from message WebSocket");
    };
  }, [JSON.stringify(conversationMap)]); // trigger reconnection if map changes
}
