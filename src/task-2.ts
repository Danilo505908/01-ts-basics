interface Product {
    readonly id: number; 
    description?: string;
    title: string;
}

const product: Product = {
    id: 1,
    title: "Tablet",
    description: "Compact and Fast",
};

console.log(`Product: ${JSON.stringify(product)}`);
