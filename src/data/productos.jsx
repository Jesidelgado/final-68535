export const productos = [
    // 🔹 Aceites
    {
        "id": 1,
        "titulo": "Liqui Moly 0W-20 Molygen New Generation 4L",
        "precio": 85400,
        "categoria": "Filtros y Aceites",
        "imagen": "https://liqui-moly.com.ar/wp-content/uploads/2022/03/molygen-0w-20.jpg",
        "stock": 20,
        "descripcion": "Ideal para motores gasolina modernos del mercado asiáticos y americano con tecnología multiválvulas, con turbocompresión y con y sin refrigeración del aire de admisión (LLK). Para proteger el motor y mantener su valor en caso de intervalos de cambio de aceite prolongados y altos requerimientos."
    },
    {
        "id": 2,
        "titulo": "Liqui Moly 5W-30 Molygen New Generation 4L.",
        "precio": 79400,
        "categoria": "Filtros y Aceites",
        "imagen": "https://liqui-moly.com.ar/wp-content/uploads/2022/03/molygen-5w-30.jpg",
        "stock": 20,
        "descripcion": "Para motores de gasolina y diésel, incluyendo la tecnología common rail. Particularmente indicado para vehículos con filtro de partículas diésel (DPF), también en caso de equipamiento posterior. Probado en turbocompresores y catalizadores."
    },
    {
        "id": 3,
        "titulo": "Liqui Moly 10W-40 Super Leichtlauf 4L",
        "precio": 75800,
        "categoria": "Filtros y Aceites",
        "imagen": "https://liqui-moly.com.ar/wp-content/uploads/2016/01/10w40.jpg",
        "stock": 20,
        "descripcion": "Ideal para modernos motores nafteros, a Diesel y motores turbo. Muy apropiado para intervalos de cambio de aceite extendidos y altas exigencias a los motores."
    },

    //  Baterías
    {
        "id": 4,
        "titulo": "Batería Mateo 12x75",
        "precio": 164500,
        "categoria": "Encendido",
        "imagen": "data:image/jpeg;base64,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",
        "stock": 10,
        "descripcion": "Batería libre de mantenimiento, ideal para vehículos livianos y medianos."
    },
    {
        "id": 5,
        "titulo": "Batería Mateo 12x60",
        "precio": 156000,
        "categoria": "Encendido",
        "imagen": "https://rallycarcenter.com.ar/wp-content/uploads/2024/08/D_NQ_NP_762272-MLA52778719037_122022-O-300x300.webp",
        "stock": 15,
        "descripcion": "Alta durabilidad y resistencia a descargas profundas, ideal para climas extremos."
    },
    {
        "id": 6,
        "titulo": "Batería Mateo 12x90",
        "precio": 179900,
        "categoria": "Encendido",
        "imagen": "https://tienda.waltergarcia.com.ar/wp-content/uploads/2024/01/Bateria-Mateo-12x90-1.webp",
        "stock": 8,
        "descripcion": "Modelo de alto rendimiento, especial para vehículos con alto consumo eléctrico."
    },

    //  Filtros
    {
        "id": 7,
        "titulo": "Filtro de Aceite Chevrolet Cruze 2013/.. 2.0 VCDI",
        "precio": 31400,
        "categoria": "Filtros y Aceites",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_953440-MLA76091555728_052024-F.webp",
        "stock": 30,
        "descripcion": "Modelo: OX1012D. Numero de pieza: 93745801. Altura: 126. Diam. Ext: 66. Diam. Encastre: 25."
    },
    {
        "id": 8,
        "titulo": "Filtro de Aceite Audi A3 1.4 1.6 Alemán",
        "precio":15300,
        "categoria": "Filtros y Aceites",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_967406-MLA77890904918_082024-F.webp",
        "stock": 20,
        "descripcion": "Modelo: VW Audi. Numero de pieza: 03C-115562-A. Altura x Ancho: 59mm x 65mm." 
    },
        {
        "id": 9,
        "titulo": "Filtro de Aceite VW Bora, Golf 1.8 T 2.0 Nafta.",
        "precio": 19500,
        "categoria": "Filtros y Aceites",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_716439-MLA69595058091_052023-F.webp",
        "stock": 10,
        "descripcion": "Modelo: L6A-115-561-B. Numero de pieza: L6A-115-561-B. Altura x ancho: 10mm x 10mm."
    },

    //  Pastillas de freno
    {
        "id": 10,
        "titulo": "Pastillas de freno Corven VW Gol Trend 1.6 08/11",
        "precio": 54700,
        "categoria": "Suspensión y Frenos",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_958340-MLA75932486049_042024-F.webp",
        "stock": 10,
        "descripcion": "Cantidad de pastillas: 4. Posición: Delantera/trasera. Modelo: 1039 3PF4017 1039. Numero de pieza: 3PF4017 1039"
    },
    {
        "id": 11,
        "titulo": "Pastillas de freno Corven VW Vento 2.0 TDI / 2.0 TFSI",
        "precio": 141600,
        "categoria": "Suspensión y Frenos",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_959005-MLA30168272753_042019-F.webp",
        "stock": 12,
        "descripcion": "Cantidad de pastillas: 4. Posición: delantera. Modelo: 3222. Numero de pieza: 3PF1004."
    },
    {
        "id": 12,
        "titulo": "Pastillas de freno Corven Audi A3 3.2 8p1 2003/2012",
        "precio": 188900,
        "categoria": "Suspensión y Frenos",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_901245-MLA82195716671_012025-F.webp",
        "stock": 8,
        "descripcion": "Cantidad de pastillas: 8. Posición: Delantera/trasera. Modelo: 3229 3219. Numero de pieza: 3229 3219."
    },
    {
        "id": 13,
        "titulo": "Kit Amortiguadores Corven VW Bora",
        "precio": 188900,
        "categoria": "Suspensión y Frenos",
        "imagwn": "https://http2.mlstatic.com/D_NQ_NP_2X_779437-MLA30911941628_052019-F.webp",
        "stock": 8,
        "descripcion": "Numero de pieza: 42101G. Posición: Trasero. Lado: Izq/Der."
    },
    {
        "id": 14,
        "titulo": "Kit Armotiguadores Corven Plus Audi A4",
        "precio": 604800,
        "categoria": "Suspensión y Frenos",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_826285-MLA31021396583_062019-F.webp",
        "stock": 8,
        "descripcion": "Numero de pieza: 34636G+42637G. Posición: Delantero. Lado: Izq/Der."
    },
    {
        "id": 15,
        "titulo": "Kit Amortiguadores Corven Plus Ford Focus",
        "precio": 362600,
        "categoria": "Suspensión y Frenos",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_779437-MLA30911941628_052019-F.webp",
        "stock": 8,
        "descripcion": " Numero de pieza: 42847G+35845G@35846G. Posición: Delantero. Lado: Izq/Der."
    },

    //  Bujías
    {
        "id": 16,
        "titulo": "Bujía NGK BKUR5ETC-10 x4",
        "precio": 34700,
        "categoria": "Encendido",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_739809-MLA74506692896_022024-F.webp",
        "stock": 40,
        "descripcion": "VOLKSWAGEN: Crossfox, Fox, Audi A3."
    },
    {
        "id": 17,
        "titulo": "Bujía NGK TR6B10 x4",
        "precio": 31700,
        "categoria": "Encendido",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_877078-MLA47203117731_082021-O.webp",
        "stock": 20,
        "descripcion": "FORD: Ecosport, Fiesta."
    },
    {
        "id": 18,
        "titulo": "Bujía NGK BPR5EY x4",
        "precio": 18200,
        "categoria": "Encendido",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_802146-MLA41716943190_052020-F.webp",
        "stock": 20,
        "descripcion": "VOLKSWAGEN: Gol, Passat. CHEVROLET: Agile, Astra. FIAT: Duna, Tipo."
    },
    {
        "id": 19,
        "titulo": "Bujía NGK BKUR6ET-10 x4",
        "precio": 43500,
        "categoria": "Encendido",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_755318-MLA78155714197_082024-O.webp",
        "stock": 20,
        "descripcion": "VOLKSWAGEN: Bora, Caddy. AUDI: A3, A4.",
    },
    {
        "id": 20,
        "titulo": "Bujía NGK LFR6B x4",
        "precio": 24600,
        "categoria": "Encendido",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_834960-MLA79340680376_092024-F.webp",
        "stock": 20,
        "descripcion": "CITROEN: C3, C4. PEUGEOT: 206, 308.",
    },
    {
        "id": 21,
        "titulo": "Bujía NGK BKR6EGP x4",
        "precio": 33400,
        "categoria": "Encendido",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_687655-MLA40999561937_032020-F.webp",
        "stock": 20,
        "descripcion": "VOLKSWAGEN: Bora. CHEVROLET: Corsa, Meriva, Vectra. FIAT: Mobi, Siena, Uno.",
    },

    //  Luminaria 
    {
        "id": 22,
        "titulo": "LAMPARA HALOGENA. H4 12v 60/55 KOBO",
        "precio": 5400,
        "categoria": "Luminaria",
        "imagen": "https://www.micolini.com/mods/html/fil/Model/Product/20991/thumb_03_241-12342KO.jpg.webp",
        "stock": 20,
        "descripcion": "Cod. 241-12342KO."
    },
    {
        "id": 23,
        "titulo": "LAMPARA HALOGENA H7 12v 55w KOBO",
        "precio": 11500,
        "categoria": "Luminaria",
        "imagen": "https://www.micolini.com/mods/html/fil/Model/Product/20992/thumb_03_6250292908da5-h7-3.jpg.webp",
        "stock": 20,
        "descripcion": "Cod. 241-12972KO."
    },
    {
        "id": 24,
        "titulo": "LAMPARA HALOGENA H11 24v 55w KOBO",
        "precio": 13500,
        "categoria": "Luminaria",
        "imagen": "https://www.micolini.com/mods/html/fil/Model/Product/21038/thumb_03_241-13362KO.jpg.webp",
        "stock": 20,
        "descripcion": "Cod. 241-13362KO."
    },
    {
        "id": 25,
        "titulo": "KIT CREE LED H1",
        "precio": 22000,
        "categoria": "Luminaria",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_719339-MLA76178556956_052024-F.webp",
        "stock": 20,
        "descripcion": "S6 Plus HS Original 6500k."
    },
    {
        "id": 26,
        "titulo": "KIT CREE LED H7",
        "precio": 22000,
        "categoria": "Luminaria",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_719339-MLA76178556956_052024-F.webp",
        "stock": 20,
        "descripcion": "S6 Plus HS Original 6500k."
    },
    {
        "id": 27,
        "titulo": "KIT CREE LED H11",
        "precio": 22000,
        "categoria": "Luminaria",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_719339-MLA76178556956_052024-F.webp",
        "stock": 20,
        "descripcion": "S6 Plus HS Original 6500k."
    }
];


export default productos;
