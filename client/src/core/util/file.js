
export function readFileAsText(file) {
  return new Promise((resolve) => {
    /* eslint-disable no-undef */
    const reader = new FileReader()

    reader.onload = function onLoad() {
      resolve(reader.result)
    }

    reader.readAsText(file)
  })
}
