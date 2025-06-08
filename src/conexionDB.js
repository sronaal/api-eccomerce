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

    let productos = [
      {
        producto: "iPhone 13",
        stock: 10,
        precio: 330,
        imagenURL: "https://example.com/images/iphone13.jpg",
        categoria: "6845d68fce77a47d11ae49ee"
      },
      {
        producto: "Samsung Galaxy S22",
        stock: 15,
        precio: 300,
        imagenURL: "https://example.com/images/galaxy_s22.jpg",
        categoria: "6845d68fce77a47d11ae49ee"
      },
      {
        producto: "Google Pixel 6",
        stock: 12,
        precio: 280,
        imagenURL: "https://example.com/images/pixel6.jpg",
        categoria: "6845d68fce77a47d11ae49ee"
      },
      {
        producto: "OnePlus 9 Pro",
        stock: 8,
        precio: 290,
        imagenURL: "https://example.com/images/oneplus9pro.jpg",
        categoria: "6845d68fce77a47d11ae49ee"
      },
      {
        producto: "MacBook Air M2",
        stock: 7,
        precio: 1000,
        imagenURL: "https://example.com/images/macbook_air_m2.jpg",
        categoria: "6845d68fce77a47d11ae49ef"
      },
      {
        producto: "Dell XPS 13",
        stock: 9,
        precio: 950,
        imagenURL: "https://example.com/images/dell_xps13.jpg",
        categoria: "6845d68fce77a47d11ae49ef"
      },
      {
        producto: "HP Spectre x360",
        stock: 6,
        precio: 1200,
        imagenURL: "https://example.com/images/spectre_x360.jpg",
        categoria: "6845d68fce77a47d11ae49ef"
      },
      {
        producto: "Lenovo ThinkPad X1",
        stock: 10,
        precio: 1100,
        imagenURL: "https://example.com/images/thinkpad_x1.jpg",
        categoria: "6845d68fce77a47d11ae49ef"
      },
      {
        producto: "Sony WH-1000XM5",
        stock: 20,
        precio: 300,
        imagenURL: "https://example.com/images/sony_wh1000xm5.jpg",
        categoria: "6845d68fce77a47d11ae49f0"
      },
      {
        producto: "Bose QuietComfort 45",
        stock: 18,
        precio: 250,
        imagenURL: "https://example.com/images/bose_qc45.jpg",
        categoria: "6845d68fce77a47d11ae49f0"
      },
      {
        producto: "Apple AirPods Max",
        stock: 5,
        precio: 550,
        imagenURL: "https://example.com/images/airpods_max.jpg",
        categoria: "6845d68fce77a47d11ae49f0"
      },
      {
        producto: "JBL Tune 760NC",
        stock: 25,
        precio: 120,
        imagenURL: "https://example.com/images/jbl_tune760nc.jpg",
        categoria: "6845d68fce77a47d11ae49f0"
      },
      {
        producto: "Samsung QN90C 55\"",
        stock: 4,
        precio: 1500,
        imagenURL: "https://example.com/images/samsung_qn90c_55.jpg",
        categoria: "6845d68fce77a47d11ae49f1"
      },
      {
        producto: "LG OLED C2 65\"",
        stock: 3,
        precio: 2000,
        imagenURL: "https://example.com/images/lg_oled_c2_65.jpg",
        categoria: "6845d68fce77a47d11ae49f1"
      },
      {
        producto: "Sony Bravia XR65A80L",
        stock: 4,
        precio: 1800,
        imagenURL: "https://example.com/images/sony_bravia_xr65.jpg",
        categoria: "6845d68fce77a47d11ae49f1"
      },
      {
        producto: "TCL 55S550G",
        stock: 10,
        precio: 450,
        imagenURL: "https://example.com/images/tcl_55s550g.jpg",
        categoria: "6845d68fce77a47d11ae49f1"
      },
      {
        producto: "iPad Pro 12.9\"",
        stock: 8,
        precio: 999,
        imagenURL: "https://example.com/images/ipad_pro_12.jpg",
        categoria: "6845d68fce77a47d11ae49f2"
      },
      {
        producto: "Samsung Galaxy Tab S8",
        stock: 12,
        precio: 800,
        imagenURL: "https://example.com/images/tab_s8.jpg",
        categoria: "6845d68fce77a47d11ae49f2"
      },
      {
        producto: "Amazon Fire HD 10",
        stock: 20,
        precio: 150,
        imagenURL: "https://example.com/images/fire_hd10.jpg",
        categoria: "6845d68fce77a47d11ae49f2"
      },
      {
        producto: "Microsoft Surface Go 3",
        stock: 9,
        precio: 600,
        imagenURL: "https://example.com/images/surface_go3.jpg",
        categoria: "6845d68fce77a47d11ae49f2"
      },
      {
        producto: "Anker PowerCore 26800mAh",
        stock: 30,
        precio: 80,
        imagenURL: "https://example.com/images/anker_powercore.jpg",
        categoria: "6845d68fce77a47d11ae49f3"
      },
      {
        producto: "Apple MagSafe Charger",
        stock: 25,
        precio: 40,
        imagenURL: "https://example.com/images/magsafe_charger.jpg",
        categoria: "6845d68fce77a47d11ae49f3"
      },
      {
        producto: "Logitech MX Master 3",
        stock: 15,
        precio: 100,
        imagenURL: "https://example.com/images/mx_master_3.jpg",
        categoria: "6845d68fce77a47d11ae49f3"
      },
      {
        producto: "Samsung T7 SSD 1TB",
        stock: 22,
        precio: 120,
        imagenURL: "https://example.com/images/samsung_t7.jpg",
        categoria: "6845d68fce77a47d11ae49f3"
      },
      {
        producto: "Intel i9-13900K",
        stock: 6,
        precio: 550,
        imagenURL: "https://example.com/images/intel_i9.jpg",
        categoria: "6845d68fce77a47d11ae49f4"
      },
      {
        producto: "NVIDIA RTX 4080",
        stock: 4,
        precio: 1200,
        imagenURL: "https://example.com/images/rtx_4080.jpg",
        categoria: "6845d68fce77a47d11ae49f4"
      },
      {
        producto: "Corsair Vengeance LPX 32GB",
        stock: 14,
        precio: 150,
        imagenURL: "https://example.com/images/corsair_ram.jpg",
        categoria: "6845d68fce77a47d11ae49f4"
      },
      {
        producto: "Asus ROG Strix Z790",
        stock: 7,
        precio: 300,
        imagenURL: "https://example.com/images/rog_strix_z790.jpg",
        categoria: "6845d68fce77a47d11ae49f4"
      },
      {
        producto: "Philips Hue Starter Kit",
        stock: 18,
        precio: 200,
        imagenURL: "https://example.com/images/hue_kit.jpg",
        categoria: "6845d68fce77a47d11ae49f5"
      },
      {
        producto: "Ring Video Doorbell 4",
        stock: 12,
        precio: 180,
        imagenURL: "https://example.com/images/ring_doorbell4.jpg",
        categoria: "6845d68fce77a47d11ae49f5"
      },
      {
        producto: "Google Nest Cam",
        stock: 10,
        precio: 130,
        imagenURL: "https://example.com/images/nest_cam.jpg",
        categoria: "6845d68fce77a47d11ae49f5"
      },
      {
        producto: "TP-Link Kasa Smart Plug",
        stock: 25,
        precio: 25,
        imagenURL: "https://example.com/images/kasa_smart_plug.jpg",
        categoria: "6845d68fce77a47d11ae49f5"
      },
      {
        producto: "PlayStation 5",
        stock: 5,
        precio: 500,
        imagenURL: "https://example.com/images/ps5.jpg",
        categoria: "6845d68fce77a47d11ae49f6"
      },
      {
        producto: "Xbox Series X",
        stock: 6,
        precio: 500,
        imagenURL: "https://example.com/images/xbox_x.jpg",
        categoria: "6845d68fce77a47d11ae49f6"
      },
      {
        producto: "Nintendo Switch OLED",
        stock: 8,
        precio: 350,
        imagenURL: "https://example.com/images/switch_oled.jpg",
        categoria: "6845d68fce77a47d11ae49f6"
      },
      {
        producto: "Sony DualSense Controller",
        stock: 20,
        precio: 70,
        imagenURL: "https://example.com/images/dualsense.jpg",
        categoria: "6845d68fce77a47d11ae49f6"
      },
      {
        producto: "Apple Watch Series 9",
        stock: 9,
        precio: 399,
        imagenURL: "https://example.com/images/applewatch9.jpg",
        categoria: "6845d68fce77a47d11ae49f7"
      },
      {
        producto: "Samsung Galaxy Watch 7",
        stock: 10,
        precio: 299,
        imagenURL: "https://example.com/images/galaxywatch7.jpg",
        categoria: "6845d68fce77a47d11ae49f7"
      },
      {
        producto: "Garmin Instinct 2 Solar",
        stock: 7,
        precio: 279,
        imagenURL: "https://example.com/images/instinct2_solar.jpg",
        categoria: "6845d68fce77a47d11ae49f7"
      },
      {
        producto: "Fitbit Versa 4",
        stock: 12,
        precio: 199,
        imagenURL: "https://example.com/images/fitbit_versa4.jpg",
        categoria: "6845d68fce77a47d11ae49f7"
      }
    ];


    //await Categoria.insertMany(categorias) 


    await Product.insertMany(productos)

  } catch (error) {

    throw `Error conexion DB ${error}`
  }
};

export default conexionDB;
