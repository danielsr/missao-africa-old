import omit from 'lodash/omit'

export const saveOrUpdate = model => (doc) => {
  if (doc._id) {
    return model.findOneAndUpdate({ _id: doc._id }, omit(doc, ['_id']), { new: true })
  }
  return model.create(doc)
}

