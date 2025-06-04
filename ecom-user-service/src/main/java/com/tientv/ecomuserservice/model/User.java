package com.tientv.ecomuserservice.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.Nationalized;

import java.time.Instant;
import java.time.LocalDate;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "app_users")
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @ColumnDefault("newid()")
    @Column(name = "firebase_id", nullable = false)
    private UUID firebaseId;

    @Nationalized
    @Column(name = "full_name", nullable = false, length = 100)
    private String fullName;

    @Column(name = "birth_of_date", nullable = false)
    private LocalDate birthOfDate;

    @Column(name = "gender", nullable = false)
    private Boolean gender = false;

    @Column(name = "avatar_url", nullable = false, length = 500)
    private String avatarUrl;

    @ColumnDefault("getdate()")
    @Column(name = "created_at", nullable = false)
    private Instant createdAt;

    @ColumnDefault("getdate()")
    @Column(name = "updated_at", nullable = false)
    private Instant updatedAt;

    @ColumnDefault("'BUYER'")
    @Column(name = "role", nullable = false, length = 50)
    private String role;

    public User(UUID uid, String name, String avatarUrl, String role) {
        this.firebaseId = uid;
        this.fullName = name;
        this.birthOfDate = LocalDate.now();
        this.gender = true;
        this.avatarUrl = avatarUrl;
        this.createdAt = Instant.now();
        this.updatedAt = Instant.now();
        this.role = "BUYER";
    }
}