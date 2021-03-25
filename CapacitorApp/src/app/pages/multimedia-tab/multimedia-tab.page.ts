import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Plugins, Camera, CameraResultType, CameraSource } from '@capacitor/core';
import { ToastController } from '@ionic/angular';
import { RecordingData, GenericResponse, Base64String } from 'capacitor-voice-recorder'
import { error } from 'selenium-webdriver';

const { VoiceRecorder } = Plugins


@Component({
  selector: 'app-multimedia-tab',
  templateUrl: './multimedia-tab.page.html',
  styleUrls: ['./multimedia-tab.page.scss'],
})


export class MultimediaTabPage implements OnInit {

  //Variables
  listaFotosUrl: SafeResourceUrl[] = [];
  listaAudios: RecordingData[] = [];
  estaGrabando: boolean = false;


  constructor(
    private sanitizer: DomSanitizer,
    public toast: ToastController
    ) {}


  ngOnInit() {}


  //Mostrar un toast con error de grabación de audio
  async mostrarToast(error: string) {
    const toast = await this.toast.create({
      message: "No se puede grabar el audio. " + error,
      duration: 2000
    });
    
    toast.present();
  }


  //Grabar audio
  async grabarAudio() {

    let puedeGrabar: boolean;

    try {

      //Pide el permiso
      await VoiceRecorder.requestAudioRecordingPermission().then((result: GenericResponse) => console.log(result.value));
      //Comprueba que lo tenga
      await VoiceRecorder.hasAudioRecordingPermission().then((result: GenericResponse) => puedeGrabar = result.value);

      //Grabar si se puede
      if (puedeGrabar) {

        await VoiceRecorder.startRecording()
          .then((result: GenericResponse) => this.estaGrabando = true)
          .catch(error => this.estaGrabando = false);

        //Si no se han dado los permisos
      } else this.mostrarToast("No se han dado los permisos.");
      

      //Si ocurre un error
    } catch (error) {
      this.mostrarToast(error);
    }
  }


  //Parar grabación de audio y guardar audio en lista
  async pararGrabar() {

    let tempAudio: RecordingData;

    await VoiceRecorder.stopRecording()
      .then((result: RecordingData) => tempAudio = result)
      .catch(error => console.log(error));

    this.listaAudios.unshift(tempAudio);
    this.estaGrabando = false;
  }


  //Controles Reproducir Audio
  async controlarAudio(accion, audioBase64) {

    let audio = new Audio("data:audio/aac;base64," + audioBase64);

    if (accion == "stop") {
      audio.pause();
      audio.currentTime = 0;
    }

    if (accion == "play") {
      audio.play();
    }

    if (accion == "pause") {
      audio.pause();
    }
  }


  //Tomar foto
  async tomarFoto() {

    let tempImagen = await Camera.getPhoto({
      quality: 95,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });

    let tempFotoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(tempImagen && (tempImagen.webPath));
    this.listaFotosUrl.unshift(tempFotoUrl);
  }

}
