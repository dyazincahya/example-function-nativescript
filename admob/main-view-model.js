import {
    BannerAdSize
} from "@nativescript/firebase-admob"

function getMessage(counter) {
    if (counter <= 0) {
        return 'Hoorraaay! You unlocked the NativeScript clicker achievement!'
    } else {
        return $ {
            counter
        }
        taps left
    }
}

export function createViewModel() {
    const viewModel = new Observable()

    viewModel.banner = {
        passed: false,
        unit: 'ca-app-pub-3940256099942544/6300978111',
        id: 'pagebanner1',
        width: 320,
        height: 50,
        onLoad: (event) => {
            if (!viewModel.banner.passed) {
                viewModel.banner.passed = true
                const banner = event.object;
                const adSize = new BannerAdSize(viewModel.banner.width, viewModel.banner.height)
                banner.size = adSize
                banner.load()
                console.log("banner Loaded")
            }
        }
    }

    viewModel.counter = 42
    viewModel.message = getMessage(viewModel.counter)

    viewModel.onTap = () => {
        viewModel.counter--
        viewModel.set('message', viewModel.banner.id)
    }

    return viewModel
}
