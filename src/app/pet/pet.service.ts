import { Pet } from "./pet.model";

// dodaj u providers u koreni modul!
export class PetService {
    private pets: Pet[] = [
        { id: "0", name: "Luna", age: "3 years", type: "cat", size: "small", price: 1500, imageUrl: "https://www.dailypaws.com/thmb/bi5V7jjo0lcxt3220F0MaD5TvUE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/white-munchkin-cat_150890825-2000-14ac416a91344b928f0f25e01e06503e.jpg" },
        { id: "1", name: "Simba", age: "1 year", type: "cat", size: "medium", price: 1300, imageUrl: "https://images.litter-robot.com/media/wysiwyg/orange-tabby-outside.png" },
        { id: "2", name: "Bella", age: "2 years", type: "dog", size: "small", price: 1200, imageUrl: "https://i.pinimg.com/736x/76/09/e3/7609e36d4c7e1639796f887ee53676d3.jpg" },
        { id: "3", name: "Max", age: "4 years", type: "dog", size: "large", price: 3000, imageUrl: "https://careyanimalhospital.com/wp-content/uploads/2022/02/why-does-my-dog-sleep-at-my-feet.jpg" },
        { id: "4", name: "Buddy", age: "5 years", type: "dog", size: "medim", price: 2500, imageUrl: "https://www.boredpanda.com/blog/wp-content/uploads/2019/05/shiba-inu-dog-flower-fields-photography-masayo-ishizuki-japan-24-5cdbf37794320__700.jpg" },
        { id: "5", name: "Shadow", age: "2 years", type: "cat", size: "medium", price: 1600, imageUrl: "https://image.petmd.com/files/inline-images/black-cat-breeds-american-shorthair.jpeg?VersionId=FHXiYOmOykNtIdlZ.V5LQC_E8wXzlgyG" },
        { id: "6", name: "Milo", age: "4 years", type: "cat", size: "small", price: 1400, imageUrl: "https://powerpetsagency.com/wp-content/uploads/2024/11/Luna-Tabby-2-600x1351.jpg" },
        { id: "7", name: "Daisy", age: "3 years", type: "rabbit", size: "small", price: 800, imageUrl: "https://hips.hearstapps.com/hmg-prod/images/baby-rabbit-in-meadow-royalty-free-image-1717078659.jpg?crop=0.88763xw:1xh;center,top&resize=1200:*" },
        { id: "8", name: "Coco", age: "1 year", type: "bird", size: "small", price: 1000, imageUrl: "https://s7d2.scene7.com/is/image/PetSmart/4041017" },
        { id: "9", name: "Zippy", age: "2 years", type: "turtle", size: "small", price: 300, imageUrl: "https://cdn11.bigcommerce.com/s-skdyft6w8e/images/stencil/original/carousel/5/1__67560.jpg?c=1&imbypass=on" },
        { id: "11", name: "Ruby", age: "1 year", type: "ferret", size: "small", price: 700, imageUrl: "https://cdn.mos.cms.futurecdn.net/LaEj3ZmLRdDcVjD36d2SfF-1200-80.jpg" },        
        { id: "13", name: "Lilly", age: "1 year", type: "cat", size: "small", price: 1400, imageUrl: "https://www.catster.com/wp-content/uploads/2023/11/domestic-mackerel-tabby-cat-lying-on-a-chair-Ana-Iacob-Photography-Shutterstock.jpg" },
        { id: "16", name: "Nina", age: "6 months", type: "rabbit", size: "small", price: 600, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-lXaI6GAi8JUhDlNzjSgkWERYjcuYJljIg&s" },
        { id: "17", name: "Leo", age: "2 years", type: "cat", size: "medium", price: 1500, imageUrl: "https://www.firstforwomen.com/wp-content/uploads/sites/2/2024/12/Orange-cat-behavior.jpg?quality=86&strip=all" },
        { id: "18", name: "Peanut", age: "2 years", type: "turtle", size: "small", price: 350, imageUrl: "https://reptile.guide/wp-content/uploads/2020/04/baby-bog-turtle.jpg" },
        { id: "19", name: "Mochi", age: "1 year", type: "bird", size: "small", price: 1200, imageUrl: "https://i.etsystatic.com/29484300/r/il/a5227c/3980749068/il_570xN.3980749068_t2sp.jpg" }
    ];
    
    getPets() {
        return this.pets;
    }
}
