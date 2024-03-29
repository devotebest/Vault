import { Component } from '@angular/core'
import { NavController } from '@ionic/angular'
import { BIP39Signer } from '../../models/BIP39Signer'
import { SecretEditPage } from '../secret-edit/secret-edit'
import { Secret } from '../../models/secret'
import { FormGroup, Validators, FormBuilder } from '@angular/forms'
import { MnemonicValidator } from '../../validators/mnemonic.validator'
import { handleErrorLocal, ErrorCategory } from '../../providers/error-handler/error-handler'

const signer = new BIP39Signer()

@Component({
  selector: 'page-secret-import',
  templateUrl: 'secret-import.html',
  styleUrls: ['./secret-import.scss']
})
export class SecretImportPage {
  readonly mnemonic: string
  secretImportForm: FormGroup

  constructor(public navController: NavController, private formBuilder: FormBuilder) {
    const formGroup = {
      mnemonic: ['', Validators.compose([Validators.required, MnemonicValidator.isValid])]
    }

    this.secretImportForm = this.formBuilder.group(formGroup)
  }

  goToSecretCreatePage() {
    const secret = new Secret(signer.mnemonicToEntropy(BIP39Signer.prepareMnemonic(this.mnemonic)))
    //this.navController.push(SecretEditPage, { secret: secret, isGenerating: true }).catch(handleErrorLocal(ErrorCategory.IONIC_NAVIGATION))
  }
}
