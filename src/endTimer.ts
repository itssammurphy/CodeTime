import * as vscode from 'vscode'

const endTimer = (ctx: vscode.ExtensionContext) => {
    const timer = ctx.workspaceState.get<NodeJS.Timeout>('codetime_timer')
    const elapsed_time =
        Date.now() - (ctx.workspaceState.get('codetime_start_time') as number)
    if (!timer) {
        return // NO TIMER RUNNING
    }
    clearInterval(timer)
    ctx.workspaceState.update('codetime_timer', undefined)
    ctx.workspaceState.update('codetime_start_time', undefined)
    vscode.window.setStatusBarMessage(`Timer Paused: ${elapsed_time}s`)
}

export default endTimer
