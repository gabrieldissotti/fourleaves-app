# fourleaves app

<img src="./docs/cover.png" alt='capa do projeto' width='100%' />

## Sobre o projeto

> Estarei organizando o README e demais documentações nas próximas semanas

### Links

[Protótipo do app](https://www.figma.com/file/AwUebXoPfSAOMUJufmHytk/Fourleaves?node-id=0%3A1)

[Contribuir para o projeto](./CONTRIBUTING.md)

### Problemas conhecidos

> problema com eslint não funcionando?
> exlua o node_modules e o yarn.lock, de yarn, de reload no vscode e permita que o vscode use o node_modules/eslint

> problema com "Keystore file '/projects/fourleaves-app/android/app/debug.keystore' not found for signing config 'debug'."
> cd ./android/app && keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000

> Não foi utilizado .env até o momento por conta do não funcionamento das libs com expo sdk 39
