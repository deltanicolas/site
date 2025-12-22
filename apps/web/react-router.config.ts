// @ts-ignore
import type { Config } from '@react-router/dev/config';

export default {
	appDirectory: "src/app",
	ssr: false,
	basename: "/",

	async prerender() {
		return ["/"];
	},
} satisfies Config;