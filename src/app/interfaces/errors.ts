// Cree una clase que extiende la clase Error para crear mis propios errores
export class ProductsAPIError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
    this.name = "ProducstAPIError";
  }
}
