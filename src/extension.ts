// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'
import beginTimer from './beginTimer'
import endTimer from './endTimer'

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "codetime" is now active!')

    const addCommand = (id: string, fn: () => void): void => {
        const cmd = vscode.commands.registerCommand(id, fn)
        context.subscriptions.push(cmd)
    }

    addCommand('codetime.startTimer', () => beginTimer(context))
    addCommand('codetime.endTimer', () => endTimer(context))
}

// This method is called when your extension is deactivated
export function deactivate(context: vscode.ExtensionContext) {
    endTimer(context)
}
