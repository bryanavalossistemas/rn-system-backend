DROP TABLE IF EXISTS "DetailSale";
CREATE TABLE "DetailSale" (
    "idDetailSale" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "idProduct" INTEGER NOT NULL,
    "idSale" INTEGER NOT NULL,

    CONSTRAINT "DetailSale_pkey" PRIMARY KEY ("idDetailSale")
);

DROP TABLE IF EXISTS "Sale";
CREATE TABLE "Sale" (
    "idSale" SERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL,
    "idCustomer" INTEGER NOT NULL,

    CONSTRAINT "Sale_pkey" PRIMARY KEY ("idSale")
);

DROP TABLE IF EXISTS "Customer";
CREATE TABLE "Customer" (
    "idCustomer" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "ruc" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("idCustomer")
);

DROP TABLE IF EXISTS "DetailPurchase";
CREATE TABLE "DetailPurchase" (
    "idDetailPurchase" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "cost" INTEGER NOT NULL,
    "idProduct" INTEGER NOT NULL,
    "idPurchase" INTEGER NOT NULL,

    CONSTRAINT "DetailPurchase_pkey" PRIMARY KEY ("idDetailPurchase")
);

DROP TABLE IF EXISTS "Purchase";
CREATE TABLE "Purchase" (
    "idPurchase" SERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "Purchase_pkey" PRIMARY KEY ("idPurchase")
);

DROP TABLE IF EXISTS "ProductImage";
CREATE TABLE "ProductImage" (
    "idProductImage" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "idProduct" INTEGER NOT NULL,

    CONSTRAINT "ProductImage_pkey" PRIMARY KEY ("idProductImage")
);

DROP TABLE IF EXISTS "Product";
CREATE TABLE "Product" (
    "idProduct" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "cost" INTEGER NOT NULL DEFAULT 0,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "idCategory" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("idProduct")
);

DROP TABLE IF EXISTS "Category";
CREATE TABLE "Category" (
    "idCategory" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("idCategory")
);

ALTER TABLE "Product" ADD CONSTRAINT "Product_idCategory_fkey" FOREIGN KEY ("idCategory") REFERENCES "Category"("idCategory") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_idProduct_fkey" FOREIGN KEY ("idProduct") REFERENCES "Product"("idProduct") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "DetailPurchase" ADD CONSTRAINT "DetailPurchase_idProduct_fkey" FOREIGN KEY ("idProduct") REFERENCES "Product"("idProduct") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "DetailPurchase" ADD CONSTRAINT "DetailPurchase_idPurchase_fkey" FOREIGN KEY ("idPurchase") REFERENCES "Purchase"("idPurchase") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "Sale" ADD CONSTRAINT "Sale_idCustomer_fkey" FOREIGN KEY ("idCustomer") REFERENCES "Customer"("idCustomer") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "DetailSale" ADD CONSTRAINT "DetailSale_idProduct_fkey" FOREIGN KEY ("idProduct") REFERENCES "Product"("idProduct") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "DetailSale" ADD CONSTRAINT "DetailSale_idSale_fkey" FOREIGN KEY ("idSale") REFERENCES "Sale"("idSale") ON DELETE CASCADE ON UPDATE CASCADE;

INSERT INTO "Category" ("name") VALUES ('Arroz');
INSERT INTO "Category" ("name") VALUES ('Aceite');
INSERT INTO "Category" ("name") VALUES ('Leche');
INSERT INTO "Category" ("name") VALUES ('Harina');
INSERT INTO "Category" ("name") VALUES ('Manteca');
INSERT INTO "Category" ("name") VALUES ('Levadura');
INSERT INTO "Category" ("name") VALUES ('Azucar');
INSERT INTO "Category" ("name") VALUES ('Detergente');
INSERT INTO "Category" ("name") VALUES ('Colorante');
INSERT INTO "Category" ("name") VALUES ('Menestra');
INSERT INTO "Category" ("name") VALUES ('Fideo');
INSERT INTO "Category" ("name") VALUES ('Atun');
INSERT INTO "Category" ("name") VALUES ('Papel');
INSERT INTO "Category" ("name") VALUES ('Jabon');
INSERT INTO "Category" ("name") VALUES ('Champues');
INSERT INTO "Category" ("name") VALUES ('Filtrantes');

INSERT INTO "Product" ("name", "price", "idCategory") VALUES ('Harina Anita x 50 Kg', 100000000, 1);
INSERT INTO "Product" ("name", "price", "idCategory") VALUES ('Harina Nicolini x 50 Kg', 125000000, 2);
INSERT INTO "Product" ("name", "price", "idCategory") VALUES ('Pescado Fresco x 1k', 80000000, 3);
INSERT INTO "Product" ("name", "price", "idCategory") VALUES ('Leche Gloria en lata x 400m', 8600000, 4);
INSERT INTO "Product" ("name", "price", "idCategory") VALUES ('Panadería y reposterí', 145000000, 5);
INSERT INTO "Product" ("name", "price", "idCategory") VALUES ('Congelado', 100000000, 6);
INSERT INTO "Product" ("name", "price", "idCategory") VALUES ('Cereales y alimentos seco', 100000000, 7);
INSERT INTO "Product" ("name", "price", "idCategory") VALUES ('Bebida', 100000000, 8);
INSERT INTO "Product" ("name", "price", "idCategory") VALUES ('Snacks y aperitivo', 130000000, 9);
INSERT INTO "Product" ("name", "price", "idCategory") VALUES ('Productos de limpieza del hogar', 110000000, 10);
INSERT INTO "Product" ("name", "price", "idCategory") VALUES ('Artículos de cuidado personal', 102000000, 11);
INSERT INTO "Product" ("name", "price", "idCategory") VALUES ('Productos para mascotas', 100000000, 12);
INSERT INTO "Product" ("name", "price", "idCategory") VALUES ('Alimentos para bebés y cuidado infantil', 105000000, 13);
INSERT INTO "Product" ("name", "price", "idCategory") VALUES ('Productos de higiene femenina', 45000000, 14);
INSERT INTO "Product" ("name", "price", "idCategory") VALUES ('Alimentos orgánicos y saludables', 100000000, 15);
INSERT INTO "Product" ("name", "price", "idCategory") VALUES ('Productos internacionales o étnicos', 100000000, 16);

INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('100PRE FELIZ SOCIEDAD ANONIMA CERRADA', '20379719440', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('A & L SAN SEBASTIAN SOCIEDAD ANONIMA CERRADA - A & L SAN SEBASTIAN S.A.C.', '20518829468', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('A.BRAVO EMPRESA INDIVIDUAL DE RESPONSABILIDAD LIMITADA', '20512429123', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('A´MARELO PRODUCCIONES S.R.L', '20522337804', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ABALFRESH SOCIEDAD ANONIMA CERRADA', '20510139560', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ABASTECIMIENTOS MINEROS E INDUSTRIALES & CIA S.A.C', '20392805665', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ABBA PROVEEDOR SAC', '20605913556', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ABC 22000 SOCIEDAD ANONIMA CERRADA - ABC 22000', '20563648547', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ABOGADOS & GESTORES DE COBRANZAS FERREYRA S.A.C. - AGECOFER S.A.C.', '20602734367', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ABREGU CUETO GRIMALDA', '10061169569', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ACAVILLE S.A.C.', '20548345350', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ACERO MOLEROS INGRID LILIANA', '10235614753', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ACOSTA SANCHEZ ELIZABETH MELCHORA', '10106622642', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ADELA MIRANDA MEDINA', '45752245', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ADMINISTRADORA CASOLI S.A.C.', '20603262647', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ADR PROVEEDORES S.A.C.', '20548503958', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ADRIANA AGRAMONTE CATERING S.A.C.', '20454382791', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('AG BUSINESS S.A.C', '20538643921', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('AGP SOCIEDAD ANONIMA CERRADA', '20498412727', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('AGROINDUSTRIA MALPARTIDA SAC', '2051753288', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('AGROINDUSTRIA MALPARTIDA SAC', '20511753288', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('AGROINDUSTRIA SANTA MARIA S.A.C.', '20100166144', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('AGROINDUSTRIA VIDA SANA S.A.C.', '20601040990', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('AGROINDUSTRIA VIDA SANA S.A.C.', '20601040990', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('AGROINDUSTRIAS FORTACHON E.I.R.L.', '20611424389', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('Agronesis del peru', '20602289029', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('AGUILAR CUCHCA GLADYS GIOVANNA', '10437934920', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('AIRA QUISPE NILDA SILVANA', '10084213751', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('AJ LOGISTICA S.A.C.', '20551518061', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('AJAJÁ GROUP S.A.C.', '20607960888', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ALANIA RICALDI SUSAN DENISSE', '10444060196', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ALARCON VELARDE JUAN PABLO', '10420357872', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ALARCON VILLALOBOS DE CARRASCO PORFIRIA', '10070399828', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ALCARRAZ ALARCON RODOLFO', '10071123621', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ALCARRAZ CAMPOS ROc:\Users\bryan\Documents\representaciones_nataly\prisma\seed.sqlDENVIL', '10073041088', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('Alcides Albertho Lava Huisa', '10044060891', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ALDAMA PRODUCTS & SERVICES E.I.R.L.', '20568941013', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ALDAVE CANO VICTORIA FACTORA', '10073498495', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ALEJOS CISNEROS MANUEL ENRIQUE', '10327741786', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ALFREDO PIMENTEL SEVILLA S A', '20100025915', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('alicia loaypardo menacho', '07484859', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ALIMENTOS ALIAGA DEL PERU SOCIEDAD ANONIMA CERRADA', '20601580854', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ALIMENTOS HANKAR S.A.C', '20603353804', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ALLIN TARPUY E.I.R.L.', '20511982805', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ALMEYDA PACHAS JACKELINE ROCIO', '10432042982', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ALMEYDA PACHAS JACKELINE ROCIO', '10432042982', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ALTUNA SALAS MARLENE YOLANDA', '10066728388', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ALVARADO HINSBI ROCIO DEL PILAR', '10321257807', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ALVARADO TREJO REMIGIO DOMINGO', '10326582463', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('AMANCIO RAMOS ANTIQUIPA', '10092437341', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('AMR PERUVIAN FOODS E.I.R.L.', '20603775008', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ANA LIZ SURCO PUMA', '70826649', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ANA MARIA BENDEZU CAMPOS', '09367834', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ANA MARIA BENDEZU CAMPOS', '09367834', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ANC PROYECTOS &  SERVICIOS GENERALES EIRL', '20606887371', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ANDGERA COMERCIAL E.I.R.L.', '20512089608', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ANDRADE BERNABE SAMUEL ASTERIO', '10085456500', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ANDREA LUISA COLLANTES CAMPOS', '45453065', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ANGELES COTRINA KELLY YAKELIN', '10756567921', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ANGELICA ARTEAGA', '10280208', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ANGULO PEREZ AARON ABDIAS', '10712372368', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('anibal raul curi rivas', '421633296', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('anibal raul rivas curi', '42163329', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('anita montero cruces', '45451104', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ANSEREY E.I.R.L.', '20603153155', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ANTONIO CHAMBI', '09785994', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('AQUINO COTERA HERMELINDA', '10418488072', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ARACELI', '73415886', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ARC NEGOCIACIONES E.I.R.L.', '20552364296', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('Arcadio TINTAYA  MAMANI', '10023990003', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ARCASI AVILA MERILU ANTOSI', '10413913310', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('AREQUIPA EXPRESS COMITE 4 S.C.R.L.', '20162574435', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ARESLUC S.A.C.', '20514380601', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ARIACAR SOCIEDAD COMERCIAL DE RESPONSABILIDAD LIMITADA', '20505608641', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ARISPE CACERES JHONY ALDO', '10001641048', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ARKADAS PERTUR S.A.C.', '20610915630', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ARMAS SALAZAR NADINE', '10154478138', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ARMUTO CERAZO LUCY', '10153716191', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('AROCUTIPA CCORI TEOFILA PRESENTACION', '10060859642', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('AROMAS MARINOS E.I.R.L.', '20547526369', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ARONI PAZCE JOSE HECTOR', '10200448265', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ARQUEROS ALAYO CARLOS CRISTIAN', '10180037832', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ARRIETA CARDENAS ELSA LUCERO', '10094499190', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ARRIETA LEONARDO HERACLIO LIZARDO', '10101471611', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ARTURO HUALLANCA VARGAS', '10106961528', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ASEMA CAMISEA S.A.C.', '20601115558', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ASENJO RAMIREZ DE MELENDEZ KATTY LUCELL', '10166874594', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ASIAMERICA EXPORTS IMPORTS CO S.A.C.', '20521478838', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ASIAN FUSION FOOD', '20612397563', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ASOCIACION CIVIL MISTURA UMA RAYMI', '20600080131', '', '');
INSERT INTO "Customer" ("name", "ruc", "address", "phone") VALUES ('ASOCIACION DE MICROEMPRESARIOS PROYECTO V DE GAMARRA', '20522655415', '', '');
