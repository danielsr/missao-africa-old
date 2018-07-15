import omit from 'lodash/omit'

export const saveOrUpdate = model => doc =>
  (doc._id
    ? model.findOneAndUpdate({ _id: doc._id }, omit(doc, ['_id']), { new: true })
    : model.create(doc))

