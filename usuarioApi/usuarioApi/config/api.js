import { Platform } from "react-native";

// -----------------------------------------------------------------
// IMPORTANTE: cambia esta IP cada vez que cambies de red WiFi.
// Es la IP local de la COMPUTADORA donde corre "docker compose" (miAPI).
//
// Cómo encontrarla:
//   Windows -> abre cmd y corre: ipconfig
//              busca "Dirección IPv4" del adaptador WiFi (ej. 192.168.1.50)
//   Mac     -> ipconfig getifaddr en0
//   Linux   -> ifconfig (o "ip a")
//
// El celular y la computadora deben estar en la MISMA red WiFi.
// -----------------------------------------------------------------
const LOCAL_IP = "192.168.100.17"; // IP actual de la PC (Wi-Fi)

export const API_BASE_URL =
  Platform.OS === "web"
    ? "http://localhost:5000"
    : `http://${LOCAL_IP}:5000`;