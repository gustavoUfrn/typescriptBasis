import { CategoriesRepository } from "../repositories/CategoryRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    constructor(private categoriesRepository: CategoriesRepository) {}

    execute({ description, name }: IRequest): void {
        const categoryAlreaydExists =
            this.categoriesRepository.findByName(name);

        if (categoryAlreaydExists) {
            throw new Error("Category already exists!");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryService };
