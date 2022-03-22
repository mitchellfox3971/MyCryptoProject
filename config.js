import colorama
import asyncio
import re
from colorama import Fore
import random


channel_inp = None  # 933050911662690334 (Archway faucet)
time_sleep = None
colorama.init()
while True:
    try:
        channel_inp = int(input("Channel: "))
        break
    except Exception:
        print("Error!")
while True:
    try:
        time_sleep = int(input("Time the wait (min): "))
        break
    except Exception:
        print("Error!")
