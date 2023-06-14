import path from 'node:path'
import fg from 'fast-glob'
import { handlerFile } from './util'

const rs = ['index.html', 'package.json', 'README.md', 'LICENSE']

const genViteVue3Ts = async (project: ProjectOption) => {
    const filenames = fg.sync('packages/vite-vue3-ts/**/*', {
        dot: true,
        ignore: ['**/node_modules/**']
    })
    filenames.map(src => {
        const dest = src.replace('packages/vite-vue3-ts', project.name)
        const has = rs.includes(path.basename(src))
        handlerFile(src, dest, (content: string): string => {
            if (has) {
                content = content.replace('PROJECT_NAME', project.name)
                content = content.replace('PROJECT_DESC', project.desc)
                content = content.replace('PROJECT_VERSION', project.version)
                content = content.replace('PROJECT_AUTHOR', project.author)
            }
            return content
        })
    })
}

export default genViteVue3Ts
