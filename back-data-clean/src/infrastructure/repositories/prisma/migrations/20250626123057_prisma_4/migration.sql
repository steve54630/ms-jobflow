-- CreateTable
CREATE TABLE `Candidacy` (
    `member_id` INTEGER NOT NULL,
    `cv_id` VARCHAR(191) NOT NULL,
    `job_offer_id` INTEGER NOT NULL,
    `remember` DATETIME(3) NULL,
    `status` ENUM('prepared', 'pending', 'interview_planned', 'refused') NULL,
    `description` TEXT NULL,

    PRIMARY KEY (`cv_id`, `job_offer_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Candidacy` ADD CONSTRAINT `Candidacy_job_offer_id_fkey` FOREIGN KEY (`job_offer_id`) REFERENCES `Job_offer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
