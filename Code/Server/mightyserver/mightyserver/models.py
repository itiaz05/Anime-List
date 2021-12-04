from django.db import models


class Anime(models.Model):
    Ratings = (
        (1, 'Very Bad'),
        (2, 'Bad'),
        (3, 'Neutral'),
        (4, 'Good'),
        (5, 'Excellent'),
    )

    id = models.AutoField(primary_key=True, unique=True)
    name = models.CharField(max_length=30)
    rating = models.IntegerField(max_length=1, choices=Ratings)
