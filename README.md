# oit-mentorship-project

### Commands

    "setup": "lerna clean -y && lerna bootstrap"
        - sets up project: cleans any node_modules that may interfere with a proper install and then symlinks all projects inside packages and hoists them upto a central node_modules at root

    "clean": "lerna run clean --stream"
        - uses rimraf (a cli that allows windows users to use rm -rf) to blast away any related build folder that may have accidently gotten stale for scoped packages

    "lernaupdate": "npx lerna-update-wizard"
        - updater cli that easily allows you to update all your apps/libraries in one command:
        Be sure to visit the docs here -> [lerna-update-wizard](https://github.com/Anifacted/lerna-update-wizard#readme).

    "dev": "lerna run dev --parallel"
        - runs "dev" across projects in packages/ see package.jsons to see what cmds are run, the parallel flag runs everything at the same time in their own thread

    "build:lib": "lerna run build:lib --stream"
        - runs a one and done command to force build your ui-component lib, be sure to run this if for some reason while ur running your dev or web commands are running in another terminal

    "build:web": "lerna run build:web --stream"
        - runs everything locally that is needed for the 'web' project, visit package.jsons to see which each package is running
