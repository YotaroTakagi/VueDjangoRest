from socket import socket, AF_INET, SOCK_DGRAM

HOST = ""
PORT = 8000

# ソケットを用意
s = socket(AF_INET, SOCK_DGRAM)
# バインドしておく
s.bind((HOST, PORT))

while True:
    try:
        # 受信
        msg, address = s.recvfrom(65535)
        print(f"message: {msg}\nfrom: {address}")
    except KeyboardInterrupt:
        print("終了します")
        # ソケットを閉じる
        s.close()
