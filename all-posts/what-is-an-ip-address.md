---
title: What the heck is an IP Address?
excerpt: The non-technical version
date: July 6, 2024
tags:
  - Network Engineering
---

In a world where almost everyone has at least one digital device, I’m pretty sure you’ve heard the term “IP address” thrown around quite a bit, but what exactly is it, and why is it so important?

Whether you’re streaming House of The Dragon (what was that ending btw?), watching your favorite cat videos, or simply looking for the next greatest meme, an IP address plays a crucial role in making it all happen.

In this post, I’ll break down what an IP address is, why we need it, and how you can find yours, and hopefully answer some of the burning questions you might have but are too embarrassed to ask out loud.

## What is an IP Address and Why Do We Need It?

An IP address, short for Internet Protocol address, is how devices talk to each other. Similar to how I dial my sister’s number when I have important info (read: juicy gossip) or how we send packages to house addresses, devices connected to a network communicate with each other using IP addresses.

> An IP address is a unique string of numbers assigned to each device connected to the internet or a network. Think of it as your device’s personal identifier in the vast online world.

An IP address ensures that data sent over the internet reaches the right destination. Without IP addresses, the internet wouldn’t know where to send the information we request, whether it's loading a TikTok, sending a text, or loading a webpage. Everything would be chaos.

![Chaos Gif](/images/ip-address/chaos.gif)

## The Structure of an IP Address

IP addresses come in two main versions: IPv4 and IPv6.

IPv4 dates back to the 1980s when the internet was still a private network owned by the military. IPv4 can provide only 4.3 billion addresses which seems like such a huge number but remember: there are around 7 billion people in the world today with each person owning at least one device that can connect to the internet.

Because of that limitation, the IETF came up with IPv6 which has a potential pool of 340 undecillion addresses — that's the number 340 followed by 36 zeroes. But it is only slowly replacing IPv4.

- **IPv4:** This is the most common type of IP address. It’s made up of four sets of numbers (called octets), each ranging from 0 to 255, separated by periods (e.g., 192.168.1.1). An IP address has two parts: the network ID, comprising the first three numbers of the address, and a host ID, the fourth number in the address.

![What is an IP Address](/images/ip-address/ip-address.png)

- **IPv6:** An IPv6 address is much longer, consisting of eight groups of four hexadecimal digits, separated by colons (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334). This format allows for a virtually limitless number of unique addresses, ensuring that every device can have its own.

The structure of an IP address, whether IPv4 or IPv6, is what enables the accurate routing of data between devices on the internet.

## Public vs. Private IP Addresses

There are two types of IP addresses: public/external and private/local/lnternal IP addresses.

Your Internet Service Provider (ISP) provides your public IP address. It’s unique across the entire internet, meaning no other network has the same public IP address. When you connect to the internet, your public IP is what websites and online services see.

You have a different IP address within your home or business network, each device is assigned a private IP address. These addresses are not unique globally and are only used within your local network. So all the devices connected to your home network will have the same **network ID portion** but the **Host ID portion** will be different for each dvice. Devices like your computer, smartphone, and smart TV all have private IP addresses that allow them to communicate with each other through your router.

![Types of IP Addresses](/images/ip-address/ip-types.png)

It’s like when everybody calls you by your government name out in the real world, but in your home, everyone refers to you by your nickname.

In essence, your public IP address is how the outside world sees your network, while private IP addresses are for internal communication within your network.

## How Did Your Device Get Its IP Address?

Now you might be wondering, "How does my device get its IP address?"

Most of the time, it’s automatically assigned by something called **DHCP**, aka Dynamic Host Configuration Protocol. When your device connects to a network, the DHCP server hands out an IP address from a pool of available ones, sort of like assigning seats at a large event. This type of IP address is known as a dynamic IP address.
There are also static IP addresses, which are manually assigned and don’t change. These are often used for devices that need a permanent address, like servers or network printers.

## Is My IP Address Permanent?

Now you might ask, “Is my IP address permanent?” The answer depends on the type of IP address you have:

- **Dynamic IP Address:** Most home internet connections use dynamic IP addresses, which can change often. Your ISP might assign you a different public IP address each time you reconnect to the internet or after a certain period.

- **Static IP Address:** Some businesses and individuals opt for static IP addresses, which do not change. Static IPs are often used for servers or services that need to be consistently reachable at the same address.

So, if you’re using a dynamic IP address, which is most common, your IP address can change. However, a static IP address will remain the same until it's manually changed.

## How Can You Find Your IP Address?

You might be wondering: “Well how do I find out my IP address”

Finding your IP address is pretty easy, although the steps vary depending on the device you’re using. But here’s how to do it:

- **On a Windows PC:** Click on the **Start Menu** and go to **Settings** > **Network & Internet** > **Properties**.
  Or Open the **Command Prompt** and type `ipconfig`. Look for the "IPv4 Address."

- **On a Mac:** Go to System Preferences > Network, select your network connection, and you’ll see the IP address displayed.

- **On your phone:** In the Wi-Fi settings, tap the network you’re connected to, and you’ll find the IP address listed there.

There are also websites like "What’s My IP?" that will show you your public IP address with a single click.

## Why Should You Care?

You might not think about your IP address often, but there are a few reasons to be aware of it:

**Security:** Now, you might not always want the outside world to know your IP address for several reasons. In such cases, it is possible to your IP address using a Virtual Private Network (VPN) but more on that in another blog post. Your IP address can reveal your location, which is why protecting it with tools like a VPN can be important for privacy.

**Accessing Content:** Some websites restrict access based on location. Changing your IP address using a VPN can help you access content that might otherwise be blocked in your region.

**Troubleshooting:** If you’re having network issues, knowing your IP address can be helpful when diagnosing problems or speaking with tech support.

## Conclusion

In summary, an IP address is an important part of how the Internet works. It helps ensure that the data you send and receive gets to the right place. While it’s mostly behind the scenes, understanding a bit about IP addresses can give you a better sense of how the online world connects us all.
