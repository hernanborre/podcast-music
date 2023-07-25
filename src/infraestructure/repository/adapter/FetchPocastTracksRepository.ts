import PodcastRepository from "@/domain/repository/PodcastRepository";


export class FetchPodcastRepository implements PodcastRepository {
    // es importante que la implementación de esta interfaz devuelva
    // la información de MI MODEL (el propio chico y limpio)
    // aquí hacemos la adptación del DTO del Response a nuestro modelo que 
    // luego usará la view
   
    constructor(){
        //super()
    }
}