package com.financepro.model;
import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "transaktionen")
@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class Transaction {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate datum;
    private String beschreibung;
    private String kategorie;
    @Enumerated(EnumType.STRING)
    private Art art;
    private BigDecimal betrag;
    private String konto;
    public enum Art { Einnahme, Ausgabe }
}