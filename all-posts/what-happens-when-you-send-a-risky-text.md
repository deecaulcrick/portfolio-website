---
title: The TCP/IP and OSI Models — What happens when you send that risky text?
excerpt: The non-technical version
date: July 12, 2024
tags:
  - Network Engineering
---

![me yearning](/images/risky-text/yearning.png)

We’ve all been there – you’re lying on your bed on a Friday night, chronically yearning, and about to send that text message that could change everything. Maybe it’s confessing your feelings, making a bold decision, or something you would regret the moment you send it. But have you ever wondered what happens when you hit 'send' on that text that could ruin your life or embarrass you for years to come? I’m gonna explain it to you using the TCP/IP and the OSI models to see how that risky text travels from your phone to its destination.

## The Basic of Networking Models:

Think of a networking model as a blueprint that outlines how data moves from one place to another on a network. Before your text reaches its recipient, it has to go through a complex process involving several layers of communication protocols.
Two models help explain this process: **TCP/IP and OSI.**

Just like the postal system has a process for delivering letters, these models describe the steps data takes as it travels across the internet. Networking Models are described in layers, where each layer represents a different part of the process and together they ensure that your message reaches its destination (the poor unsuspecting victim of your declaration).

While TCP/IP is the practical model used in the real world, OSI is a more detailed, theoretical model that helps us understand each step in depth.

## What is TCP/IP?

TCP/IP stands for **Transmission Control Protocol/Internet Protocol.** TCP/IP was developed in the 1970s and became the foundation of the modern internet. This is the practical model we use in the real world. It’s a straightforward, four-layer model:

![TCP/IP Network Model](/images/risky-text/tcp_ip-model.png)

1. **Layer 4 – Application Layer**

This is the topmost layer where user applications interact with the network. It’s responsible for providing network services directly to the end user. When you type out your text and hit "send," the messaging application, whether iMessage, Snapchat, or WhatsApp (which operates at the Application Layer) packages your message into data that can be transmitted over the internet. It might also add metadata, like the recipient's phone number, and encrypt the message for security.

**Key Protocols include:**

- HTTP/HTTPS: Used for web browsing.
- FTP: For file transfers.
- SMTP/IMAP/POP3: For email services.
- DNS: Translates domain names to IP addresses.

2. **Transport Layer**

This layer ensures reliable data transmission between two devices. It manages data segmentation, flow control, and error correction.

**Key Protocols:**

- **TCP (Transmission Control Protocol):** Provides reliable, ordered, and error-checked delivery of data.

It’s connection-oriented, meaning it establishes a connection before transmitting data. If the app uses TCP, the message is broken down into smaller segments, each of which is given a sequence number. TCP ensures that all these segments arrive at the destination, even if they take different paths through the network. If some segments are lost or corrupted, TCP will retransmit them to ensure the complete message is received correctly.

- UDP (User Datagram Protocol): A simpler, connectionless protocol that does not guarantee delivery or order, used for applications where speed is more critical than reliability, such as video streaming or online gaming.

3. **Internet Layer**

Once your message is segmented, the Internet Layer comes into play. This layer is responsible for routing the segments through the network using **IP (Internet Protocol).** Each segment is given an IP address—both the source (your phone) and the destination (your victim's phone). The Internet Layer determines the best route for each segment, whether through Wi-Fi, cellular data, or a combination of both.

**Key Protocols:**

- **IP (Internet Protocol):** Assigns IP addresses and routes packets from the source to the destination.
- **ICMP (Internet Control Message Protocol):** Used for diagnostic and error-reporting functions, such as the “ping” command.
- **ARP (Address Resolution Protocol):** Maps IP addresses to physical MAC addresses.

4. **Network Interface Layer**

This layer handles the physical transmission of data over the network medium. It deals with hardware components like cables, switches, and network interface cards (NICs).

When your message segments finally reach the Network Interface Layer, they are converted into electrical signals, light pulses, or radio waves, depending on the network medium. For instance, if you're using Wi-Fi, your phone's Wi-Fi adapter converts the segments into radio waves that are transmitted to your router, and from there, to the internet. If you’re using cellular data, the message is sent as radio signals to the nearest cell tower.

**Key Concepts:**

- **Ethernet:** The most common wired LAN technology, governing how data is formatted and transmitted.
- **Wi-Fi:** Wireless networking technology for connecting devices to the internet or a local network.

### Bringing It All Together

Once your message has traveled through the internet, the process is reversed on the recipient's end. The segments are reassembled into the original text, and the message is displayed in their messaging app, ready to be read.

## The OSI Reference Model

OSI stands for **Open Systems Interconnection**, and it’s typically a reference model. What this means is that it isn’t the model that the Internet uses but it has a more detailed and theoretical approach which is useful for troubleshooting and learning networking concepts in greater detail.
OSI was developed in the late 1970s as a universal set of standards to help different systems communicate with each other. Unlike TCP/IP, OSI breaks the process down into seven layers:
The OSI model is more detailed, breaking the networking process into seven layers:

![OSI Network Model](/images/risky-text/osi-model.png)

**Layer 7 — Application Layer (TCP/IP: Application Layer):** This layer interacts with software applications to provide networking services, like sending a text through WhatsApp or iMessage.

**Layer 6 — Presentation Layer (TCP/IP: Application Layer):** This layer formats data for the network, including encryption, compression, and data translation to ensure privacy and usability.

**Layer 5 — Session Layer (TCP/IP: Application Layer):** This layer manages connections between applications, ensuring that your messaging session is maintained and correctly synchronized.

**Layer 4 — Transport Layer (TCP/IP: Transport Layer):** This layer breaks data into segments, ensuring reliable delivery (TCP) or faster, connectionless communication (UDP).

**Layer 3 — Network Layer (TCP/IP: Internet Layer):** This layer handles addressing and routing, determining the best path for your message across the internet.

**Layer 2 — Data Link Layer (TCP/IP: Network Interface Layer):** This layer packages data into frames, manages MAC addresses, and ensures error detection and correction.

**Layer 1 — Physical Layer (TCP/IP: Network Interface Layer):**
This layer transmits raw data as electrical signals, light pulses, or radio waves over the physical network medium.

## Comparing TCP/IP and OSI Models

|                | TCP/IP                                                                                                                    | OSI                                                                                                                                             |
| -------------- | ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Simplicity     | The TCP/IP model is simpler with its four layers, focusing on the practical aspects of data transmission across networks. | The OSI model offers a more detailed, theoretical breakdown with seven layers, which helps in understanding and troubleshooting network issues. |
| Practical Use  | TCP/IP is the backbone of the internet, and most modern networks are based on this model.                                 | OSI is mainly used as an educational tool to understand how different networking components interact.                                           |
| Layer Overlaps | Some layers in the OSI model map directly to those in the TCP/IP model.                                                   | The OSI's Network Layer corresponds to TCP/IP's Internet Layer, and both models' Transport Layers handle similar functions.                     |

##

![TCP/IP vs. OSI](/images/risky-text/comparison.png)

Understanding these layers not only helps in grasping how the internet works but also provides a foundation for troubleshooting network issues, optimizing performance, and securing data transmission.

## Which Model Should You Care About?

So, which model should you focus on? If you’re just trying to understand how the internet works on a basic level, TCP/IP is the way to go. It’s practical, widely used, and gets the job done.

However, if you’re diving deeper into networking—especially if you’re learning—understanding the OSI model can be incredibly valuable. It gives you a more granular view of how data travels across a network, which can help you figure out where things might be going wrong.

## The Message Arrives: What Happens Next?

Once your risky text has traveled through all these layers and across the network, it finally arrives at the recipient’s device. The whole process is then reversed:

1. **Physical to Application Layer:** The message is received at the Physical Layer, reassembled at the Data Link and Network Layers, and finally reconstructed into its original form by the Transport, Session, and Application Layers.

2. **Recipient Reads the Message:** The recipient’s phone displays your text in the messaging app, and just like that, your risky message is delivered.

3. **Recipient Responds:** There are only 3 responses you can get:

- Recipient hits you back with a variant of **_“Aww I feel the same way.”_**
- Recipient leaves you on read or even worse replies with a variant of **_“lol”,_** or **_“eww, no”_**
- Recipient takes a screenshot and posts it on Twitter, without blurring out your name, with the caption, **_“look at this clown”._**

![Don't send a risky text](/images/risky-text/risky-text.png)

## It’s More Than Just Hitting “Send”

While sending a text might seem like a simple act, a lot is happening under the hood to ensure your message reaches its destination correctly and securely. By understanding the TCP/IP and OSI models, you can appreciate the complexity and efficiency of modern communication networks.

So, next time you’re about to send that risky text, take a moment to think about the incredible journey it’s about to take. And remember, the decision to hit "send" might be simple, but what happens afterward is anything but.

### Related Posts:

- [What the heck is an IP Address?](https://deecaulcrick.com/posts/what-is-an-ip-address)
