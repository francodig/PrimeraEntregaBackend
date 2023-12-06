

class ProductManager{
    static ultId =0;
    constructor(){
        this.products =[];
    }

    addProduct(title, description, price, img, code, stock){


        if(!title || !description || !price || !img || !code || !stock){
            console.log("Por favor completa todos los campos");
            return;
        }

        if(this.products.some(item=> item.code === code)){
            console.log("Estas ingresando un producto repetido");
            return;
        }

        const newProduct = {
            id:++ProductManager.ultId,
            title,
            description,
            price,
            img,
            code,
            stock
        }

        this.products.push(newProduct);

    }

    getProducts(){
        console.log(this.products);
    }

    getProductbyId(id){
        const product = this.products.find(item=> item.id === id);
        if(!product){
            console.log("El producto no esta disponible")
        }
        else{
            console.log("El producto esta disponible: ", product)
        }
        return product;
    }

}

// 1)

const manager = new ProductManager();

// 2)
manager.getProducts();

// 3)
manager.addProduct("Producto N° 1", "Ejemplo de producto N° 1", 150, "sin imagen", "xyz123", 16);

manager.getProducts();

// 4)
manager.addProduct("Producto N° 2", "Ejemplo de producto N° 2", 230, "sin imagen", "xyz124", 19);

manager.addProduct("Producto N° 3", "Ejemplo de producto N° 3", 120, "sin imagen", "xyz125", 60);

// 5)

manager.getProducts();

// 6)

manager.addProduct("Producto N° 3", "Ejemplo de producto N° 3", 120, "sin imagen", "xyz125", 60);

// 7)

// producto disponible
manager.getProductbyId(2)

// producto no disponible
manager.getProductbyId(5)