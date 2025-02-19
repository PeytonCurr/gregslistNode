import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js";


class HousesService {

    async getHouses(query) {
        const houses = await dbContext.Houses.find(query)
        return houses
    }

    async createHouse(houseData) {
        const house = await dbContext.Houses.create(houseData)
        return house
    }

    async getHouseById(houseId) {
        const house = await dbContext.Houses.findById(houseId)
        if (!house) {
            throw new BadRequest(`No house with that id was found`)
        }
        return house
    }

    async deleteHouse(houseId) {
        await dbContext.Houses.findByIdAndDelete(houseId)
        return
    }

    async editHouse(houseEdits, houseId) {
        const originalHouse = await this.getHouseById(houseId);
        originalHouse.price = houseEdits.price || originalHouse.price
        // NOTE these do the same thing
        originalHouse.beds = houseEdits.beds ? houseEdits.beds : originalHouse.beds
        originalHouse.baths = houseEdits.baths || originalHouse.baths
        originalHouse.sqFt = houseEdits.sqFt || originalHouse.sqFt
        originalHouse.address = houseEdits.address || originalHouse.address
        await originalHouse.save();
        return originalHouse
    }

}

export const housesService = new HousesService();