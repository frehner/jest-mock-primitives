import {myBoolean} from './otherThing'

export function myFunction() {
  console.log('typeof myBoolean:', typeof myBoolean)

  if(myBoolean) return `it's true`
  return `it's false`
}