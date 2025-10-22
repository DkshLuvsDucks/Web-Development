document.addEventListener("DOMContentLoaded", () => {
    const deleteForms = document.querySelectorAll(".delete-form");

    deleteForms.forEach(form => {
        form.addEventListener("submit", e => {
            e.preventDefault();

            const overlay = document.createElement("div");
            overlay.className = "overlay";

            const modal = document.createElement("div");
            modal.className = "confirm-box";
            modal.innerHTML = `
                <h3>Delete Chat?</h3>
                <p>This action cannot be undone.</p>
                <div class="confirm-actions">
                    <button class="confirm-btn">Yes, Delete</button>
                    <button class="cancel-btn">Cancel</button>
                </div>
            `;

            document.body.append(overlay, modal);

            // Fade in
            requestAnimationFrame(() => {
                overlay.classList.add("show");
                modal.classList.add("show");
            });

            const closeModal = () => {
                modal.classList.remove("show");
                overlay.classList.remove("show");
                setTimeout(() => {
                    modal.remove();
                    overlay.remove();
                }, 200);
            };

            modal.querySelector(".cancel-btn").addEventListener("click", closeModal);
            overlay.addEventListener("click", closeModal);
            document.addEventListener("keydown", e => e.key === "Escape" && closeModal(), { once: true });

            modal.querySelector(".confirm-btn").addEventListener("click", () => form.submit());
        });
    });
});
