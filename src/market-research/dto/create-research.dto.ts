import { IsString, IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateRearchDto {
  @IsNotEmpty({ message: 'O ID do usuario e obrigatorio ' })
  @IsUUID('4', { message: 'O ID do usuario deve ser um UUID valido ' })
  usuarioId: string;

  @IsNotEmpty({ message: ' A cidade nao pode estar vazia ' })
  @IsString({ message: ' A cidade deve ser um texto ' })
  cidade: string;

  @IsNotEmpty({ message: 'O estado e obrigatorio ' })
  @IsString()
  @Length(2, 2, { message: 'O estado deve ter exatamente 2 letras (ex: SP)' })
  estado: string;
}
