import productImg01 from "../images/motherboard-01.png";
import productImg02 from "../images/motherboard-02.png";
import productImg03 from "../images/motherboard-03.png";

import productImg04 from "../images/motherboard-01.jpg";
import productImg05 from "../images/motherboard-02.jpg";
import productImg06 from "../images/motherboard-03.jpg";
import productImg007 from "../images/motherboard-04.png";

import productImg07 from "../images/cpu-01.jpg";
import productImg08 from "../images/cpu-02.jpg";
import productImg09 from "../images/cpu-03.jpg";
import productImg10 from "../images/cpu-04.jpg";

import productImg13 from "../images/gc-01.jpg";
import productImg14 from "../images/gc-02.jpg";
import productImg15 from "../images/gc-03.png";
import productImg16 from "../images/gc-04.jpg";
import productImg17 from "../images/gc-05.jpg";
import productImg18 from "../images/gc-06.jpg";

import productImg19 from "../images/ram-01.jpg";
import productImg20 from "../images/ram-02.jpg";
import productImg21 from "../images/ram-03.jpg";
import productImg22 from "../images/ram-04.jpg";

import productImg23 from "../images/psu-01.png";
import productImg25 from "../images/psu-03.png";

const products = [
  {
    id: "01",
    productsName: "ROG Maximus Z790 Extreme ",
    imgUrl: productImg01,
    category: "motherboard",
    price: 84999,
    shortDesc:
      "ASUS ROG Maximus Z790 Hero (WiFi 6E) LGA 1700(Intel®13th&12th Gen) ATX Gaming Motherboard(PCIe 5.0,DDR5,20+1power Stages,2.5Gb LAN, Bluetooth V5.2,2X Thunderbolt 4 Ports,5xM.2, Thunderbolt™ 4/USB4)",
    description:
      "Intel LGA 1700 socket: Ready for 13th & 12th Gen Intel Core processors and Windows 11, support PCIe 5.0 and DDR5 Intelligent Control: ASUS-exclusive tools including AI Overclocking, AI Cooling II, AI Networking(GameFirst VI) and Two-Way AI Noise-Cancelation for easy configuration Robust Power Solution: 20+1 teamed power stages rated for 90 A, ProCool II power connectors, MicroFine alloy chokes and premium metallic capacitors Optimized Thermal Design: VRM heatsinks plus integrated aluminum I/O cover, high-conductivity thermal pad, triple M.2 heatsinks and dual with embedded backplates, and ROG Water-Cooling Zone High-performance Networking: Onboard WiFi 6E,Bluetooth V5.2, Intel 2.5Gb Ethernet, and ASUS LANGaurd",
    reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.5,
  },

  {
    id: "02",
    productsName: "ASUS Prime H610M-E D4 ",
    imgUrl: productImg02,
    category: "motherboard",
    price: 34000,
    shortDesc:
      "ASUS Prime H610M-E D4 Intel Lga 1700 Mic-ATX Motherboard with Ddr4, Pcie 4.0, Dual M.2 Slots, Realtek 1 Gb Ethernet, Displayport, Hdmi, D-Sub, USB 3.2 Gen 1 Ports, Sata 6 Gbps, Com Header, RGB Header",
    description:
      "ASUS PRIME H610M-E D4 mATX motherboard is designed to support latest 12th Gen Intel CPU's with LGA 1700 socket, Pentium Gold and Celeron Processors with H610 Intel Chipset. The board is built with PCIe 4.0 Ready supporting 2 x DIMM, up to 64GB DDR4 3200MHz(OC) of memory and Intel Turbo Boost Technology to push your experience to its peak. Equipped with the next-gen Turbo boost max technology of PCIe 4.0, Two M.2 slots(PCIe 4.0), Realtek 1Gb Ethernet, Two USB 3.2 Gen 1 Type-A, Two USB 2.0 Type-A, Front panel USB 3.2 Gen 1, Two USB 2.0, Four SATA 6Gb/s, HDMI, DP, D-Sub support. Comes with most comprehensive cooling options ever that are configurable via Fan Xpert 4 or the UEFI BIOS. It employs VRM heatsink, PCH heatsink and hybrid fan headers. We adapted our SMT manufacturing process for the faster SafeSlot, to ensure the highest data speeds. SafeSlot is a reinforced metal sheath added to a PCIe slot to keep a card firmly installed.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "03",
    productsName: "MSI PRO Z790-P WiFi",
    imgUrl: productImg03,
    category: "motherboard",
    price: 89700,
    shortDesc:
      "MSI PRO Z790-P WiFi Motherboard, ATX - Supports Intel 12th & 13th Gen Core Processors, LGA 1700-55A DrMOS, DDR5 Memory Boost 7000+MHz/OC, PCIe 5.0 & 4.0 x16, 4 x M.2 Gen4, Wi-Fi 6E, 2.5G LAN",
    description:
      "12TH & 13TH GEN CORE, HIGH PERFORMANCE - The PRO Z790-P WIFI employs a 14 Duet Rail Power System (55A, DrMOS) VRM for the Intel Z790 chipset (LGA 1700, 12th & 13th Gen Core) with Core Boost architecture for high CPU core count power demands INTEGRATED COOLING - VRM cooling features 7W/mK MOSFET thermal pads and an extended heatsink; Includes chipset heatsink, M.2 Shield Frozr, a dedicated pump-fan cooling header & 6-layer server grade PCB with 2 oz. thickened copper DDR5 MEMORY, PCIe 5.0 & 4.0 x16 SLOTS - 4 x DDR5 DIMM slots with Memory Boost isolated circuitry for overclocking (1DPC 1R, 7000+ MHz); A PCIe 5.0 x16 Steel Armor slot supports the primary graphics card (secondary PCIe 4.0 x16 slot)",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "26",
    productsName: "GIGABYTE X570 AORUS PRO WiFi ",
    imgUrl: productImg04,
    category: "motherboard",
    price: 67900,
    shortDesc:
      "GIGABYTE Z690 AORUS PRO (LGA 1700/ Intel Z690/ ATX/ DDR5/ Quad M.2/ PCIe 5.0/ USB 3.2 Gen2X2 Type-C/ WiFi 6/ 2.5GbE LAN/ Gaming Motherboard)",
    description:
      "Intel LGA 1700 Socket: Supports 12th Gen Intel Core Series Processors DDR5 Compatible: Dual Channel Non-ECC Unbuffered DDR5 Commanding Power Design: 16+1+2 Twin Hybrid Digital VRM Design with 90A DrMOS with Tantalum Polymer Capacitors Cutting-Edge Thermal Design: Fully Covered Thermal Design and High Coverage MOSFET Heatsinks, Enlarged Thermal Guards Next Gen Connectivity: PCIe 5.0, Quad NVMe PCIe 4.0 x4 M.2, SuperSpeed USB 3.2 Gen 2x2 Type-C Fast Networking: Intel 2.5 GbE LAN, WiFi 6 802.11ax, BT5 Dynamic Audio: Hi-Fi Audio with ALC4080 and WIMA Audio Capacitors",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "04",
    productsName: "MSI Z490-A PRO ATX",
    imgUrl: productImg05,
    category: "motherboard",
    price: 13600,
    shortDesc:
      "MSI Z490-A PRO ProSeries ATX Motherboard (10th Gen Intel Core, LGA 1200 Socket, DDR4, Dual M.2 Slots, USB 3.2 Gen 2, 2.5G LAN, DP/HDMI)",
    description:
      "Supports 10th Generation Intel Core / Pentium Gold / Celeron Processors for LGA 1200 socket Supports dual channel DDR4 memory up to 128GB (4800MHz) Twin Turbo M.2 with M.2 Shield Frozr delivers transfer speeds of up to 32 GB/s for ultra-fast SSDs Core Boost technology combines optimized power circuit layouts, double CPU power connectors, and a digital power design which allows for precise and steady current delivery to the CPU On-board 2.5G LAN plus Gigabit LAN with with Wi-Fi 6 (802.11ax)",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "05",
    productsName: "ASUS ROG Strix B550-F ",
    imgUrl: productImg06,
    category: "motherboard",
    price: 42000,
    shortDesc:
      "Asus B550 ROG Strix B550-F Gaming WiFi II AMD AM4 (3rd Gen Ryzen) ATX Gaming Motherboard (PCIe 4.0,WiFi 6E, 2.5Gb LAN, BIOS Flashback, HDMI 2.1, Addressable Gen 2 RGB Header and Aura Sync)",
    description:
      "AM4 socket: Ready for AMD Ryzen 3000 and 5000 series, plus 5000 and 4000 G-series desktop processors Best gaming connectivity: PCIe 4.0-ready, dual M.2 slots, USB 3.2 Gen 2 Type-C, plus HDMI 2.1 and DisplayPort 1.2 output Smooth networking: On-board WiFi 6E (802.11ax) and Intel 2.5 Gb Ethernet with ASUS LANGuard Robust power solution: 12+2 teamed power stages with ProCool power connector, high-quality alloy chokes and durable capacitors Renowned software: Bundled 60 days AIDA64 Extreme subscription and intuitive UEFI BIOS dashboard",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "06",
    productsName: "MSI MPG Z690 Carbon Ek X ATX",
    imgUrl: productImg007,
    category: "motherboard",
    price: 29000,
    shortDesc:
      "MSI MPG Z690 Edge WiFi Motherboard ATX - Supports Intel 12th Gen Core Processors, LGA 1700 - Mystic Light, 75A VRM, Memory Boost (DDR5-6400MHz/OC), 1 x PCIe 5.0 x16, 4 x M.2 Gen4/ x4, Wi-Fi 6E",
    description:
      "Supports Intel 12th Gen Core Processors (LGA 1700) Direct 16 phases VRM with 75A SPS 4 x Lightning Gen4 slots with Shield Frozr 1 x PCI-e 5.0 x16 slot & 2 x PCI-e 3.0 x16 slots (supports CrossFire) 4 DIMMS DDR5 with Memory Boost: Dual Channel (128GB Max. / 6400+MHz OC)",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "07",
    productsName: "AMD Ryzen 9 7950X",
    imgUrl: productImg07,
    category: "cpu",
    price: 79000,
    shortDesc:
      "AMD 7000 Series Ryzen 9 7950X Desktop Processor 16 cores 32 Threads 80 MB Cache 4.5 GHz Up to 5.7 GHz Socket AM5, 600 Series Chipset (100-100000514WOF)",
    description:
      "16 Cores & 32 Threads, 80 MB Cache, 5nm 'Zen 4' Architecture Memory Support: DDR5 Up to 5200 MHz, Memory Channels: 2, TDP: 170 W Compatible with Motherboards based on 600 series chipset, Socket AM5, Windows 11 Compatible Graphics: AMD Radeon Graphics, Included Heatsink Fan: No AMD Technologies : AMD EXPO Technology, AMD Ryzen Technologies 3 Years Brand Warranty. For Technical Support : Please Contact : Tel: +91-80-67030050 (Mon-Fri: 09:00 - 17:00 IST); Expect Delayed Response due to ongoing COVID Crisis",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "08",
    productsName: "Intel Core i9-12900K",
    imgUrl: productImg08,
    category: "cpu",
    price: 47000,
    shortDesc:
      "Intel Core i9-12900K Desktop Processor16 (8P+8E) Cores up to 5.2 GHz Unlocked LGA1700 600 Series Chipset 125W",
    description:
      "Intel 7 Architecture enables improved performance per watt and micro architecture makes it power-efficient 30 MB of L3 cache memory provides excellent hit rate in short access time enabling improved system performance The processor features Socket LGA-1700 socket for installation on the PCB 10 nm enables improved performance per watt and micro architecture makes it power-efficient",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "09",
    productsName: "Intel Core i7-13700K",
    imgUrl: productImg09,
    category: "cpu",
    price: 32000,
    shortDesc:
      "Intel Core i7-13700K Desktop Processor 16 cores (8 P-cores + 8 E-cores) 30M Cache, up to 5.4 GHz Socket LGA 1700",
    description:
      "Intel Core i7 12700 is a 12th Generation Alder lake Processor with 25MB Cache Memory. The 12700 has Total 12 Cores (8 Performance Cores and 4 Efficient Cores) and 20 Threads. This is the Best processor CPU so Far released by Intel in I7 Range. It is an APU so you donot need a Graphic card necessarily. Intel Core i7 12700 12th Generation Desktop Processor supports latest LGA1700 Socket. Some of the supported Motherboards are Z690, B660, H670, H610. Intel Core i7 12700 uses base power of 65W and maximum power consumption of 180W. it comes with a stock fan inside the box for cooling for normal workloads.",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "10",
    productsName: "Zotac Gaming GEFORCE RTX 3090 Trinity 24GB GDDR6X",
    imgUrl: productImg13,
    category: "graphics card",
    price: 209800,
    shortDesc:
      "Zotac Gaming GeForce RTX 3090 Trinity OC 24 GB GDDR6X 384-bit 19.5 GBps PCIE 4.0 Gaming Graphics Card, IceStorm 2.0 Advanced Cooling, Spectra 2.0 R GB Lighting, ZT-A30900J-10P, pci_e_x16",
    description:
      "CORES : 2048 Units I CORE CLOCKS : Boost: TBD / Game: TBD MSI Radeon RX 6600 XT GAMING X 8G I 8GB GDDR6 128-bit Gaming Graphic Card DisplayPort x 3 (v1.4) HDMI x 1 (Supports 4K@120Hz/8K@60Hz and VRR as specified in HDMI 2.1) INTERFACE : PCI Express Gen 4 I MEMORY SPEED : 16 Gbps Radeon RX 6600 XT GAMING X 8G",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "25",
    productsName: "AMD Ryzen 7 3800XT",
    imgUrl: productImg10,
    category: "cpu",
    price: 29999,
    shortDesc:
      "AMD 5000 Series Ryzen 7 5800X Desktop Processor 8 cores 16 Threads 36 MB Cache 3.8 GHz Upto 4.7 GHz AM4 Socket 500 Series Chipset (100-100000063WOF)",
    description:
      "8 Cores & 16 Threads, 36 MB Cache Base Clock: 3.8 GHz, Max Boost Clock: up to 4.7 GHz. Max. Operating Temperature (Tjmax) 90°C Memory Support: DDR4 3200MHz, Memory Channels: 2, TDP: 105W, PCI Express Generation : PCIe Gen 4 Compatible with Motherboards based on 500 Series Chipset, Socket AM4",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "11",
    productsName: "MSI GeForce RTX 3090 Gaming X Trio 24GB GDDR6X",
    imgUrl: productImg14,
    category: "graphics card",
    price: 234000,
    shortDesc:
      "MSI GeForce RTX 3090 Ventus 3X 24G OC Gaming Graphics Card - Support Bracket Included, TORX Fan 3.0, 24GB pci_e_x16 GDDR6X, 384 bit, PCI Express Gen 4, DisplayPort v1.4a, HDMI 2.1, Zero Frozr",
    description:
      "Overclocked performance powered by NVIDIA Ampere with NVIDIA GeForce RTX 3090, 24GB GDDR6X, Raytracing and DLSS support Display Outputs: DisplayPort v1.4a x 3 / HDMI 2.1 x 1;Now built with a triple fan design, VENTUS proudly displays its sharp industrial aesthetic to fit any build. The award-winning MSI TORX Fan 3.0 design creates high static pressure and pushes the limits of thermal performance Heatpipes beneath the matte-finish metal backplate provide cooling for the memory modules on the rear of the PCB. Graphics Card Interface: Pci E X4",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "12",
    productsName: "INNO3D GeForce RTX 3090 ICHILL X3 24GB GDDR6X",
    imgUrl: productImg15,
    category: "graphics card",
    price: 269000,
    shortDesc:
      "INNO3D Ge Force RTX 3090 ICHILL X3 24GB GDDR6X PCI_E_x16 384-bit Gamin Graphic Card - C30903-246XX-1880VA37",
    description:
      "GEFORCE RTX 3090, 10496 CUDA Cores, 24GB GDDR6X, 384-bit Memory Bus 1755 MHz Boost, 1x HDMI 2.1, 3x DisplayPort 1.4a Compatible with motherboards having PCI-E 4.0 X16 Recommended Power Supply:- 750W. Supplementary Power Connectors - 8+8-pin 3 Year Brand Warranty",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "13",
    productsName: "ZOTAC Gaming GeForce RTX3090 Ti AMP Extreme Holo 24GB GDDR6X",
    imgUrl: productImg16,
    category: "graphics card",
    price: 292000,
    shortDesc:
      "ZOTAC Gaming GeForce RTX3090 Ti AMP Extreme Holo 24GB GDDR6X pci_e_x16 384-bit 21 Gbps PCIE 4.0 Gaming Graphics Card, HoloBlack, IceStorm 2.0 Advanced Cooling, Spectra 2.0 RGB Lighting, ZT-A30910B-10P",
    description:
      "NVIDIA Ampere architecture, 2nd Gen Ray Tracing Cores, 3rd Gen Tensor Cores 24GB 384-bit GDDR6X, 21 Gbps, PCIE 4.0; Boost Clock 1890 MHz HoloBlack, SPECTRA 2.0 RGB Lighting, IceStorm 2.0 Advanced Cooling, 3x 100mm fans, FREEZE Fan Stop, Active Fan Control, Metal RGB Lighted Backplate, Dual BIOS, Bundled RGB GPU Support Bracket 8K Ready, 4 Display Ready, HDCP 2.3, VR Ready 3 x DisplayPort 1.4a, 1 x HDMI 2.1, DirectX 12 Ultimate, Vulkan RT API, OpenGL 4.6",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "14",
    productsName: "Zotac Gaming GeForce RTX 4090 Trinity OC 24GB GDDR6X",
    imgUrl: productImg17,
    category: "graphics card",
    price: 138000,
    shortDesc:
      "Zotac Gaming GeForce RTX 4090 Trinity OC 24GB GDDR6X | 384-bit 21 Gbps pci_e_x4 Gaming Graphics Card | Ada Lovelace | IceStorm 3.0 Advanced Cooling | Spectra 2.0 RGB Lighting",
    description:
      "NVIDIA Ada Lovelace Streaming Multiprocessors: Up to 2x performance and power efficiency 4th Generation Tensor Cores: Up to 2X AI performance , 3rd Generation RT Cores: Up to 2X ray tracing performance IceStorm 3.0 Advanced Cooling, FREEZE Fan Stop, Active Fan Control, Dual BIOS; SPECTRA 2.0 RGB Lighting (compatible with external LED strip), Metal Backplate Using cutting-edge cooling technologies derived from the flagship model, the Trinity packs the punch to offer gamers the needed blistering FPS in the latest titles. Graphics Card Interface: Pci E X4",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "15",
    productsName: "MSI Gaming GeForce RTX 4090 24GB GDDR6X",
    imgUrl: productImg18,
    category: "graphics card",
    price: 203000,
    shortDesc:
      "MSI GeForce RTX 4090 Gaming X Trio 24G Graphic Card I NVIDIA GeForce RTX 4090 GPU | 24 GB GDDR6X 384-bit Memory, | 21 Gbps Speed | PCI Express 4 Interface | Upto 2610 MHz | TORX Fan 5.0, Tri FROZR 3",
    description:
      "HIGH SPEED AND COMPATIBILITY: Equipped with 24 GB of GDDR6X memory and a 384-bit memory interface, this graphic card offers blazing-fast speeds and unparalleled visual fidelity. Additionally, with its PCI-E x4 interface, this graphic card is compatible with a wide range of systems and offers lightning-fast data transfer rates. EFFICIENT COOLING SYSTEM: This graphic card comes with TORX Fan 5.0 & Zero FROZR technology, which work together, providing a perfect balance of cool & quiet for more fun during endless gaming sessions. Design improvements to TORX FAN 5.0 result in +23% airflow compared to an axial fan and +10% airflow compared to TORX FAN 4.0.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "16",
    productsName: "T-Force Delta TUF Gaming Alliance RGB DDR4 32GB (16GBx2) 3200MHz",
    imgUrl: productImg19,
    category: "ram",
    price: 12000,
    shortDesc:
      "TEAMGROUP T-Force Delta TUF Gaming Alliance RGB DDR4 32GB (16GBx2) 3200MHz (PC4-25600) CL16 Desktop Gaming Memory Ram TF9D432G3200HC16FDC01 - TUF,Yellow Camouflage",
    description:
      "In order to cope with the change of manufacturing process of the memory, TEAMGROUP will change the way of RGB lighting effects on DELTA RGB gaming memory from 2021. This is not a faulty or defective lighting, and does not affect the operation of lighting effects and software control. 120° ultra-wide-angle lighting effects; Asymmetrical, minimalist design, supports software synchronization Aluminum alloy cooling module with high heat transfer efficiency Supports XMP2.0 one-click overclocking technology Lifetime warranty",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "17",
    productsName: "G.SKILL Trident Z Neo 16GB (2x8GB) DDR4 3200MHz ",
    imgUrl: productImg20,
    category: "ram",
    price: 10000,
    shortDesc:
      "G.SKILL Trident Z Neo 16GB (2 * 8GB) DDR4 3200MHz CL16-18-18-38 1.35V Desktop Memory RAM - F4-3200C16D-16GTZN",
    description:
      "Memory Type : DDR4 / Capacity : 16GB (8GBx2) Tested Speed : 3200MHz / Tested Latency : 16-18-18-38 / Tested Voltage : 1.35V SPD Speed : 2133MHz / SPD Voltage : 1.20V Multi-Channel Kit : Dual Channel Kit Additional Notes : Rated XMP frequency & stability depends on MB & CPU capability.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "18",
    productsName: "XPG ADATA SPECTRIX D60G DDR4 RGB 16GB (2x8GB) 3200MHz",
    imgUrl: productImg21,
    category: "ram",
    price: 5900,
    shortDesc:
      "XPG ADATA SPECTRIX D60G DDR4 RGB 16GB (2x8GB) 3200MHz U-DIMM Desktop Memory - AX4U320038G16-DT60",
    description:
      "Do refer to the installation instruction and compatible processor support list in the image section The XPG SPECTRIX D60G DDR4 memory features a unique dual RGB light strip design that gives it the largest RGB surface area of any memory module it sports a wide frequency range from 3000-4133MHz and supports Intel XMP 2.0 profiles for easy overclocking.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "19",
    productsName: "T-Force Delta RGB DDR4 16GB (8GBx2) 3600MHz",
    imgUrl: productImg22,
    category: "ram",
    price: 4700,
    shortDesc:
      "TEAMGROUP T-Force Delta RGB DDR4 16GB (8GBx2) 3200MHz (PC4-25600) CL16 Desktop Memory Module ram TF3D416G3200HC16CDC01 - Black",
    description:
      "Full frame 120° ultra wide angle lighting with built-in Force Flow RGB lighting effect Aluminum alloy heat spreader with asymmetric minimalist design Supports T-FORCE BLITZ control (Beta version) / ASUS Aura Sync software synchronization Supports XMP2.0 one-click overclocking technology; QVL approved by all mainstream motherboard manufacturers Lifetime warranty",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "20",
    productsName: "ASUS ROG Strix 850W Gold",
    imgUrl: productImg23,
    category: "psu",
    price: 20000,
    shortDesc:
      "ASUS ROG Strix 850W Gold PSU, Power Supply (ROG heatsinks, Axial-tech Fan Design, Dual Ball Fan Bearings, 0dB Technology, 80 Plus Gold Certification, Fully Modular Cables, 10-Year Warranty) (90YE00A3-B0NA00)",
    description:
      "ROG heatsinks cover critical components. Lower temps result in a longer lifespan and reduced noise. Axial-tech fan design features a smaller fan hub that facilitates longer blades and a barrier ring that increases downward air pressure. Dual ball fan bearings can last up to twice as long as sleeve bearing designs. An 80 Plus Gold Certification is the result of Japanese capacitors and other premium components.",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "22",
    productsName: "ASUS ROG Thor 1200 Certified 1200W Fully-Modular RGB Power Supply",
    imgUrl: productImg25,
    category: "psu",
    price: 27000,
    shortDesc:
      "ASUS ROG Thor 1200 Certified 1200W Fully-Modular RGB Power Supply with LiveDash OLED Panel, 80+ Platinum (ROG-THOR-1200P)",
    description:
      "80+ Platinum certification for energy efficiency, built with 100% Japanese capacitors for stability and durability 0dB cooling with dustproof IP5X wing-blade fans and integrated ROG heatsinks for cooler operation OLED Power Display: Real-time power draw monitoring with OLED Power Display Aura Sync addressable RGB lighting features a nearly endless spectrum of colors with the ability to synchronize effects across an ever-expanding ecosystem of AURA Sync enabled products",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
];

export default products;
