const sequelize = require("../db");
const { DataTypes } = require("sequelize");

// syncDatabase();
// const createDB = async function syncDatabase() {
//     try {
//       await sequelize.authenticate();
//       console.log('Підключено до бази даних.');

//       // Створення таблиці для моделі "Shop"
//       await Shop.sync();
//       console.log('Таблиця "Shop" була створена або вже існує.');
//     } catch (error) {
//       console.error('Помилка підключення до бази даних:', error);
//     }
//   }

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "Costomer" },
});

const UserInfo = sequelize.define("user_info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userName: { type: DataTypes.STRING },
  city: { type: DataTypes.STRING },
  roleUser: { type: DataTypes.STRING, defaultValue: "Costomer" },
});

const Basket = sequelize.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BasketDevice = sequelize.define("basket_device", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Device = sequelize.define("device", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  rating: { type: DataTypes.INTEGER, defaultValue: 0 },
  img: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  aboutDevice: { type: DataTypes.TEXT },
});

const Logo = sequelize.define("logo", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  city: { type: DataTypes.STRING },
  country: { type: DataTypes.STRING },
  address: { type: DataTypes.STRING },
  img: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
});

const ListRatings = sequelize.define("list_ratings", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    titleReting: { type: DataTypes.STRING, allowNull: false },
    rating: { type: DataTypes.INTEGER, defaultValue: 0 },    
  });

const Type = sequelize.define("type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Brand = sequelize.define("brand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Rating = sequelize.define("rating", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  reting: { type: DataTypes.INTEGER, allowNull: false },
});

const DeviceInfo = sequelize.define("device_info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

const Reviews = sequelize.define("reviews", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  review: { type: DataTypes.STRING },
});

const TypeBrand = sequelize.define("type_brand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

UserInfo.hasMany(Reviews);
Reviews.belongsTo(UserInfo);

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketDevice);
BasketDevice.belongsTo(Basket);

Type.hasMany(Device);
Device.belongsTo(Type);

Brand.hasMany(Device);
Device.belongsTo(Brand);

// Device.hasMany(Rating);
// Rating.belongsTo(Device);

Device.hasMany(BasketDevice);
BasketDevice.belongsTo(Device);

Device.hasMany(DeviceInfo, { as: "info" });
DeviceInfo.belongsTo(Device);
////

Logo.hasMany(ListRatings, { as: "listRatings" });
ListRatings.belongsTo(Logo);

Logo.hasMany(Rating, { as: "listReting" });
Rating.belongsTo(Logo);

User.hasMany(Rating, { as: "listUsers" });
Rating.belongsTo(User);

ListRatings.hasMany(Rating, { as: "listTypeReting" });
Rating.belongsTo(ListRatings);

Logo.hasMany(Reviews, { as: "listLogo" });
Reviews.belongsTo(Logo);

////

User.hasMany(Reviews, { as: "listUser" });
Reviews.belongsTo(User);


Type.belongsToMany(Brand, { through: TypeBrand });
Brand.belongsToMany(Type, { through: TypeBrand });

module.exports = {
  User,
  UserInfo,
  Basket,
  BasketDevice,
  Device,
  Type,
  Brand,
  Rating,
  TypeBrand,
  DeviceInfo,
  Reviews,

  Logo,
  ListRatings,
};
