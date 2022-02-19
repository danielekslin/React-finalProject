import Category from "../models/category";
import Product from "../models/Product";

export const CATEGORY = [
    new Category(C1, "living room","./assets/pic/salon.jpg",4),
    new Category(C2, "kitchen","./assets/pic/kitchen.jpg",4),
    new Category(c3, "bedroom","./assets/pic/bedroom.png",4),
    new Category(C4, "bathroom","./assets/pic/bathroom.jpg",4),
    new Category(C5, "gerden","./assets/pic/graden.jpg",4),
    new Category(C6, "Children's Room","./assets/pic/child.jpg",4)
]

export const PRODUCT = [
    new Product([C1],"sofa","Gray three-seater sofa",3,0, 2000,4),
    new Product([C1],"Coffee Table","Round coffee table 70 * 70 cm in brown",12,150, 750,5),
    new Product([C1],"drewers","Chest of drawers with three drawers 50*150*80 cm, brown with gold handles",8,150, 750,5),
    new Product([C1],"footstool","Gray three-seater sofa",3,150, 750,5),

    new Product([C2],"fridge","Gray three-seater sofa",3,150, 750,5),
    new Product([C2],"Oven","Gray three-seater sofa",3,150, 750,5),
    new Product([C2],"microwave","Gray three-seater sofa",3,150, 750,5),
    new Product([C2],"toaster","Gray three-seater sofa",3,150, 750,5),

    new Product([C3],"bed","Gray three-seater sofa",3,150, 750,5),
    new Product([C3],"Closet","Gray three-seater sofa",3,150, 750,5),
    new Product([C3],"curtain","Gray three-seater sofa",3,150, 750,5),
    new Product([C3],"dresser","Gray three-seater sofa",3,150, 750,5),

    new Product([C4],"toilet cleaner","Gray three-seater sofa",3,150, 750,5),
    new Product([C4],"tin","Gray three-seater sofa",3,150, 750,5),
    new Product([C4],"laundry rack","Gray three-seater sofa",3,150, 750,5),
    new Product([C4],"stool","Gray three-seater sofa",3,150, 750,5),

    new Product([C5],"picnic table","Gray three-seater sofa",3,150, 750,5),
    new Product([C5],"dwarf","Gray three-seater sofa",3,150, 750,5),
    new Product([C5],"synthetic Grass","Gray three-seater sofa",3,150, 750,5),
    new Product([C5],"shed","Gray three-seater sofa",3,150, 750,5),

    new Product([C6],"hen house","Gray three-seater sofa",3,150, 750,5),
    new Product([C6],"Rug","Gray three-seater sofa",3,150, 750,5),
    new Product([C6],"lego","Gray three-seater sofa",3,150, 750,5),
    new Product([C6],"lamp","Gray three-seater sofa",3,150, 750,5)

];


