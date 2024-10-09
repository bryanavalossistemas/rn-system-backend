import sequelize from "../configs/database.js";
import DataTypes from "sequelize";
import Vendedor from "./Vendedor.js";
import Cliente from "./Cliente.js";

const Venta = sequelize.define("Venta", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    subtotal: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    igv: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    total: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    vendedorId: {
        type: DataTypes.INTEGER,
        references: {
            model: Vendedor,
            key: "id"
        },
        allowNull: false
    },
    clienteId: {
        type: DataTypes.INTEGER,
        references: {
            model: Cliente,
            key: "id"
        },
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true
});

Venta.belongsTo(Vendedor, { foreignKey: "vendedorId" });
Venta.belongsTo(Cliente, { foreignKey: "clienteId" });

export default Venta;
