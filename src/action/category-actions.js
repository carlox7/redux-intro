//action creators are helper functions to create actions
//you should only use action creators throughout your app
//you should NEVER hard code action literals in your app
import uuid from 'uuid/v1';

export const categoryCreate = (category) => {
  category.id = uuid()
  category.timestramp = new Date()
  return {
    type: 'CATEGORY_CREATE',
    payload: category,
  }
}

export const categoryUpdate = (category) => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
})

export const categoryDelete = (category) => ({
  type: 'CATEGORY_Delete',
  payload: category,
})

export const categoryReset = (category) => ({type: 'CATEGORY_RESET'})
