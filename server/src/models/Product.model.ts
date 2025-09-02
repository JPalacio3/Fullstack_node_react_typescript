import {
  Table,
  Column,
  Model,
  DataType,
  Default,
  PrimaryKey,
} from "sequelize-typescript";

@Table({
  tableName: "products",
})

// Define el modelo de producto
class Products extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @Column({
    type: DataType.STRING(100),
  })
  declare name: string;

  @Column({
    type: DataType.DECIMAL(6, 2),
  })
  declare price: number;

  @Default(true)
  @Column({
    type: DataType.BOOLEAN,
  })
  declare availability: boolean;
}

export default Products;
