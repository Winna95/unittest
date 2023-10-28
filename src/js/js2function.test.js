import {createImgForAvatar, findNumber, registerNewUser} from "./js2function.js";

describe("When creating avatar", ()=> {
    it("should return an image tag with the avatar url when sending a valid url into the function", ()=> {
        const avatarUrl = "http://tullball"
        const ret = createImgForAvatar(avatarUrl)
        expect(ret).toContain("<img")
        expect(ret).toContain(`src="${avatarUrl}"`)
    })
    it("should return fontAwsome icon when sending an empty avatar url", () => {
        const avatarUrl = null
        const ret = createImgForAvatar(avatarUrl)
        expect(ret).toEqual("<i class=\"fa-regular fa-image\"></i>")
    })
})

describe("When finding the number", () => {
    it("requires at least one number as input", () => {
        const number = []
        const fromEnd = true
        expect(() => {findNumber(number, fromEnd)}).toThrow()

    })
    it("returns the last number in the input array if fromEnd is true", () => {
        const numbers  = [ 1, 5 , 7]
        const fromEnd = true
        const ret = findNumber(numbers, fromEnd)
        expect(ret).toEqual(7)
        expect(ret).not.toEqual(1)
    })
    it("returns the first number in the input array if fromEnd is false", () => {
        const  numbers = [1, 5, 7]
        const fromEnd = false
        const ret = findNumber(numbers, fromEnd)
        expect(ret).toEqual(1)
        expect(ret).not.toEqual(7)
    })
})

describe("when register a new user", () => {
    it("should return a empty list of error, when successfully register a user", async () => {
        const name = "Kari"
        const email = "hdi@hdm.no"
        const password = "erhgfdsdfg"
        const profileImgUrl = "wertrewwer"
        const fetchMock = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue({})
        });
        global.fetch = fetchMock
        const ret = await registerNewUser(name, email, password, profileImgUrl)
        expect(ret).toEqual([])
        expect(ret.length).toEqual(0)
    })
})