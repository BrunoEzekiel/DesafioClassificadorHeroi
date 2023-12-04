nome_heroi = 'Batman'
xp_heroi = 8.000

if xp_heroi < 1.000:
    nivel = 'Ferro'
elif 1.000 < xp_heroi <= 2.000:
    nivel = 'Bronze'
elif xp_heroi < 1.000 <= 5.000:
    nivel = 'Prata'
elif 1.000 < xp_heroi <= 7.000:
    nivel = 'Ouro'
elif 1.000 < xp_heroi <= 8.000:
    nivel = 'Platina'
elif xp_heroi < 9.000:
    nivel = 'Acendente'
elif 9.000 < xp_heroi <= 10.000:
    nivel = 'Imortal'
elif xp_heroi >= 1.000:
    nivel = 'Radiante'

print(f"O herói  de nome {nome_heroi}Está no nivel de {nivel}")
  