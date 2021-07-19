import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoryRepository";

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const categoryAlreaydExists = categoriesRepository.findByName(name);

    if (categoryAlreaydExists) {
        return response.status(400).json({ Error: "Category already exists" });
    }

    categoriesRepository.create({ name, description });

    return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
    const all = categoriesRepository.list();

    return response.json(all);
});

export { categoriesRoutes };
