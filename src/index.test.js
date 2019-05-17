import {myFunction} from './index'
import {myBoolean} from './otherThing'

jest.mock('./otherThing', () => {
  return {
    myBoolean: jest.fn()
  }
})

describe(`myFunction`, () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it(`should return when true`, () => {
    expect(myFunction()).toEqual(`it's true`)
  })

  it(`should return when false`, () => {
    // doesn't work. is there another way?
    // myBoolean.mockReturnValue(false)

    // also doesn't work
    // myBoolean.mockImplementation(false)
    expect(myFunction()).toEqual(`it's false`)
  })
})