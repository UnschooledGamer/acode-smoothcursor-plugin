import type { WCPage } from "acode/editor/page";
import plugin from '../plugin.json';
// import style from "./style.css"

class AcodePlugin {
    public baseUrl: string | undefined;
    // style element of Smooth Cursor styling added to Acode's DOM.
    public styleElement: Element | null = null;
    async init($page: WCPage, cacheFile: any, cacheFileUrl: string): Promise<void> {

        this.styleElement = document.querySelector(`link.${plugin.id}`)
        // Removes Old Style Element If it Exists, In case something goes wrong(Sometime Acode doesn't call Destroy Methof)
        if (this.styleElement) {
            this.styleElement.remove()
            this.styleElement = null
        }

        const linkElement = document.createElement("link");

        linkElement.id = `${plugin.id}`
        linkElement.rel = "stylesheet"
        linkElement.href = `${this.baseUrl}/style.css`
        this.styleElement = document.head.appendChild(linkElement)

    }

    async destroy() {
        // Add your cleanup code here
        this.styleElement?.remove()
    }
}

if (window.acode) {
    const acodePlugin = new AcodePlugin();
    acode.setPluginInit(plugin.id, async (baseUrl: string, $page: WCPage, { cacheFileUrl, cacheFile }: any) => {
        if (!baseUrl.endsWith('/')) {
            baseUrl += '/';
        }
        acodePlugin.baseUrl = baseUrl;
        await acodePlugin.init($page, cacheFile, cacheFileUrl);
    });
    acode.setPluginUnmount(plugin.id, () => {
        acodePlugin.destroy();
    });
}
