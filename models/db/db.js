import Dexie from 'dexie'

const db = new Dexie('TakoyakiDB')

const schema = {
  todos:
    'id, title, description, addedAt, editedAt, clearedAt, deadline, isCleared, &clearId',
  todoClears: 'id, todoId, takoyakiId, addedAt, editedAt',
  takoyakis: 'id, name, imgURL, rarity, description, addedAt, editedAt'
}

db.version(1).stores(schema)

export default db
