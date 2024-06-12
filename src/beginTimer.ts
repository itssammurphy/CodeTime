import * as vscode from 'vscode'

const beginTimer = (ctx: vscode.ExtensionContext) => {
    if (ctx.workspaceState.get<NodeJS.Timeout>('codetime_timer')) {
        return // TIMER ALREADY RUNNING
    }

    const start_time = Date.now()
    const timer = setInterval(() => {
        let elapsed_seconds = Math.floor(
            (Date.now() - (start_time as number)) / 1000
        )
        vscode.window.setStatusBarMessage(`Elapsed time ${elapsed_seconds}s`)
    }, 1000)

    ctx.workspaceState.update('codetime_timer', timer)
    ctx.workspaceState.update('codetime_start_time', start_time)
}

export default beginTimer
