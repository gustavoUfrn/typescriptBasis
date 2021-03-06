import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private specificationsRepository: ISpecificationsRepository) {}

    execute({ description, name }: IRequest): void {
        const specificationsAlradyExists =
            this.specificationsRepository.findByName(name);

        if (specificationsAlradyExists) {
            throw new Error("Specification already exists!");
        }

        this.specificationsRepository.create({
            name,
            description,
        });
    }
}

export { CreateSpecificationUseCase };
