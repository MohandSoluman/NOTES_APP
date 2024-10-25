import { Model, DataTypes, Sequelize } from "sequelize";
import { IBook } from "../interfaces/book.interface";

export class Book extends Model<IBook> {
  public id!: number;
  public storeId!: number;
  public title!: string;
  public isBn!: boolean;
  public description!: string;
  public publisher!: string;
  public author!: string;
  public pages!: number;
  public created_at!: Date;
  public updated_at!: Date;

  public static initModel(sequelize: Sequelize): void {
    Book.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        storeId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "Stores",
            key: "id",
          },
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
        },
        title: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        isBn: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        publisher: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        author: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        pages: {
          type: DataTypes.NUMBER,
          allowNull: false,
        },
        created_at: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
        updated_at: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
      },
      {
        sequelize,
        tableName: "books",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
      }
    );
  }
}
