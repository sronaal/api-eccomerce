import mongoose, { mongo } from "mongoose";

import User from "./models/user.js";
import Product from "./models/product.js";
import Categoria from "./models/categoria.js";

const conexionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URLNUBE,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
    console.log("Conexion DB Exitosa")
    let categorias = [
      {
        nombre: "Celulares",
        descripcion: "Celulares de alta gama y última generación"
      },
      {
        nombre: "Laptops",
        descripcion: "Portátiles para trabajo, estudio y gaming"
      },
      {
        nombre: "Auriculares",
        descripcion: "Audífonos inalámbricos y con cable"
      },
      {
        nombre: "Televisores",
        descripcion: "Smart TVs de diferentes tamaños y resoluciones"
      },
      {
        nombre: "Tablets",
        descripcion: "Tablets para entretenimiento y productividad"
      },
      {
        nombre: "Accesorios",
        descripcion: "Fundas, cargadores, cables, soportes y más"
      },
      {
        nombre: "Componentes de PC",
        descripcion: "Procesadores, tarjetas gráficas, memorias y más"
      },
      {
        nombre: "Hogar Inteligente",
        descripcion: "Dispositivos IoT como focos, cámaras y enchufes"
      },
      {
        nombre: "Consolas y videojuegos",
        descripcion: "PlayStation, Xbox, Nintendo y juegos digitales"
      },
      {
        nombre: "Relojes inteligentes",
        descripcion: "Smartwatches y bandas deportivas con funciones avanzadas"
      }
    ];

    const productos = [
      {
        producto: "iPhone 13",
        stock: 15,
        precio: 1343.21,
        imagenURL: "",
        categoria: "6845d80894aa388af3896a05"
      },
      {
        producto: "Samsung Galaxy S22",
        stock: 13,
        precio: 1059.72,
        imagenURL: "",
        categoria: "6845d80894aa388af3896a05"
      },
      {
        producto: "Google Pixel 6",
        stock: 18,
        precio: 1519.36,
        imagenURL: "",
        categoria: "6845d80894aa388af3896a05"
      },
      {
        producto: "MacBook Air M2",
        stock: 8,
        precio: 1794.09,
        imagenURL: "",
        categoria: "6845d80894aa388af3896a06"
      },
      {
        producto: "Dell XPS 13",
        stock: 16,
        precio: 1476.55,
        imagenURL: "",
        categoria: "6845d80894aa388af3896a06"
      },
      {
        producto: "HP Spectre x360",
        stock: 10,
        precio: 1682.42,
        imagenURL: "",
        categoria: "6845d80894aa388af3896a06"
      },
      {
        producto: "Sony WH-1000XM5",
        stock: 11,
        precio: 362.17,
        imagenURL: "",
        categoria: "6845d80894aa388af3896a07"
      },
      {
        producto: "Bose QC 45",
        stock: 12,
        precio: 328.94,
        imagenURL: "",
        categoria: "6845d80894aa388af3896a07"
      },
      {
        producto: "AirPods Pro",
        stock: 14,
        precio: 297.18,
        imagenURL: "",
        categoria: "6845d80894aa388af3896a07"
      },
      {
        producto: "Samsung QN90C",
        stock: 9,
        precio: 1928.56,
        imagenURL: "",
        categoria: "6845d80894aa388af3896a08"
      },
      {
        producto: "LG OLED C2",
        stock: 7,
        precio: 1843.11,
        imagenURL: "",
        categoria: "6845d80894aa388af3896a08"
      },
      {
        producto: "Sony Bravia XR",
        stock: 6,
        precio: 1737.89,
        imagenURL: "",
        categoria: "6845d80894aa388af3896a08"
      },
      {
        producto: "iPad Pro",
        stock: 10,
        precio: 1245.99,
        imagenURL: "",
        categoria: "6845d80894aa388af3896a09"
      },
      {
        producto: "Samsung Galaxy Tab S8",
        stock: 11,
        precio: 1087.64,
        imagenURL: "",
        categoria: "6845d80894aa388af3896a09"
      },
      {
        producto: "Amazon Fire HD 10",
        stock: 17,
        precio: 289.45,
        imagenURL: "",
        categoria: "6845d80894aa388af3896a09"
      },
      {
        producto: "Cargador MagSafe",
        stock: 14,
        precio: 68.35,
        imagenURL: "",
        categoria: "6845d80894aa388af3896a0a"
      },
      {
        producto: "Power Bank Anker",
        stock: 13,
        precio: 75.82,
        imagenURL: "",
        categoria: "6845d80894aa388af3896a0a"
      },
      {
        producto: "Cable USB-C",
        stock: 20,
        precio: 19.99,
        imagenURL: "",
        categoria: "6845d80894aa388af3896a0a"
      },
      {
        producto: "Intel Core i9",
        stock: 9,
        precio: 589.77,
        imagenURL: "",
        categoria: "6845d80894aa388af3896a0b"
      },
      {
        producto: "NVIDIA RTX 4080",
        stock: 6,
        precio: 1399.49,
        imagenURL: "",
        categoria: "6845d80894aa388af3896a0b"
      },
      {
        producto: "Kingston Fury 32GB",
        stock: 15,
        precio: 142.33,
        imagenURL: "",
        categoria: "6845d80894aa388af3896a0b"
      },
      {
        producto: "Philips Hue",
        stock: 12,
        precio: 122.67,
        imagenURL: "",
        categoria: "6845d80894aa388af3896a0c"
      },
      {
        producto: "Google Nest Cam",
        stock: 7,
        precio: 229.44,
        imagenURL: "",
        categoria: "6845d80894aa388af3896a0c"
      },
      {
        producto: "TP-Link Smart Plug",
        stock: 18,
        precio: 35.71,
        imagenURL: "",
        categoria: "6845d80894aa388af3896a0c"
      },
      {
        producto: "PlayStation 5",
        stock: 9,
        precio: 699.00,
        imagenURL: "",
        categoria: "6845d80894aa388af3896a0d"
      },
      {
        producto: "Xbox Series X",
        stock: 8,
        precio: 679.50,
        imagenURL: "",
        categoria: "6845d80894aa388af3896a0d"
      },
      {
        producto: "Nintendo Switch OLED",
        stock: 13,
        precio: 399.99,
        imagenURL: "",
        categoria: "6845d80894aa388af3896a0d"
      },
      {
        producto: "Apple Watch Series 8",
        stock: 11,
        precio: 499.99,
        imagenURL: "",
        categoria: "6845d80894aa388af3896a0e"
      },
      {
        producto: "Samsung Galaxy Watch 5",
        stock: 10,
        precio: 329.89,
        imagenURL: "",
        categoria: "6845d80894aa388af3896a0e"
      },
      {
        producto: "Xiaomi Mi Band 7",
        stock: 16,
        precio: 49.99,
        imagenURL: "",
        categoria: "6845d80894aa388af3896a0e"
      }
    ];


    //await Categoria.insertMany(categorias) 


    //await Product.insertMany(productos)

  } catch (error) {

    throw `Error conexion DB ${error}`
  }
};

export default conexionDB;
