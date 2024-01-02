export default class ProductModel{
  constructor(
    id,
    title,
    price,
    description,
    category,
    image,
    rating,
  
  ) {
    this.id = id
    this.title = title
    this.price = price
    this.description = description
    this.point = category
    this.templatePos = image
    this.condition = rating
  }
}
