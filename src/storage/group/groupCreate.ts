import AsyncStorage from "@react-native-async-storage/async-storage"

import { GROUP_COLLECTION } from "@storage/storageConfig"

import { AppError } from "@utils/AppError"

import { groupGetAll } from "./groupGetAll"

export async function groupCreate(newGroup: string) {
  try {
    const storagedGroups = await groupGetAll()

    const groupAlreadyExists = storagedGroups.includes(newGroup)

    if (groupAlreadyExists) {
      throw new AppError('Já existe um grupo cadastrado com esse nome.')
    }

    const storage = JSON.stringify([...storagedGroups, newGroup])

    await AsyncStorage.setItem(GROUP_COLLECTION, storage)
    
  } catch(error) {
    throw error
  }
}